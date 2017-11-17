/* eslint-disable no-console */

import spaceExport from 'contentful-export';
import spaceImport from 'contentful-import';

// TODO ENV VARS
const MANAGEMENT_TOKEN = 'CFPAT-d3337097476df5ed2ab54c9764486916b6c9e851ccffc075eb7f70282e9ea6f3';

const filterFields = entries =>
  entries.map((entry) => {
    const fieldNames = entry.fields ? Object.keys(entry.fields) : [];
    return {
      ...entry,
      fields: fieldNames.reduce((acc, fieldName) => {
        acc[fieldName] = { 'en-US': entry.fields[fieldName]['en-US'] };
        return acc;
      }, {}),
    };
  });

export default (source, target, shouldFilterNonEnglish = false) =>
  new Promise(resolve =>
    spaceExport({
      managementToken: MANAGEMENT_TOKEN,
      saveFile: false,
      skipWebhooks: true,
      spaceId: source,
    }).then((output) => {
      const { assets, entries, locales } = output;
      const content = shouldFilterNonEnglish ? {
        ...output,
        assets: filterFields(assets),
        entries: filterFields(entries),
        locales: locales.filter(({ code }) => code === 'en-US'),
      } : output;
      spaceImport({
        content,
        managementToken: MANAGEMENT_TOKEN,
        spaceId: target,
      }).then(() => {
        console.log('Data imported successfully');
        resolve();
      })
        .catch((err) => {
          console.log('Import error', err);
        });
    })
      .catch((err) => {
        console.log('Export error', err);
      }));
