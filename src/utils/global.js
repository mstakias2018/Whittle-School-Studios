exports.getChunks = (array, numberOfItems) => {
  const sets = [];
  const chunks = array.length / numberOfItems;

  for (let i = 0, j = 0; i < chunks; i += 1, j += numberOfItems) {
    sets[i] = array.slice(j, j + numberOfItems);
  }

  return sets;
};

exports.getRandomKey = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

const getNumberWithSufix = (no) => {
  const sufix = ['st', 'nd', 'rd'];
  const skipNumbers = [11, 12, 13];

  let text = `${no}th`;

  if (no.toString().length > 1) {
    const numLast = parseInt(no.toString().split('')[1], 10);
    if (numLast <= sufix.length && !skipNumbers.includes(no) && numLast > 0) {
      text = `${no}${sufix[numLast - 1]}`;
    }
  } else if (no <= sufix.length) {
    text = `${no}${sufix[no - 1]}`;
  }

  return text;
};

exports.getDateInfo = (date) => {
  const d = date.split('-').map(value => parseInt(value, 10));

  return {
    day: d[2],
    dayText: getNumberWithSufix(d[2]),
    month: d[1],
  };
};

exports.sendAnalyticsEvent = (
  eventCategory,
  eventAction,
  eventLabel, // optional
  eventValue // optional
) => window && window.ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);

exports.sortEventDates = (object, numOfItems) => {
  const sortedArray = [];

  [...Array(5)].fill(0).forEach((_, index) => {
    if (object[`event${index + 1}Date`]) {
      sortedArray.push({
        date: object[`event${index + 1}Date`],
        number: index + 1,
      });
    }
  });

  sortedArray.sort((a, b) => {
    const c = new Date(a.date);
    const d = new Date(b.date);
    return c - d;
  });

  return sortedArray.splice(0, numOfItems);
};
