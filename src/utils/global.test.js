import { getChunks, getDateInfo, sendAnalyticsEvent, sortEventDates } from './global';

describe('getChunks', () => {
  test('default', () => {
    expect(getChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });
});

const sufixes = [
  '1st',
  '2nd',
  '3rd',
  '4th',
  '5th',
  '6th',
  '7th',
  '8th',
  '9th',
  '10th',
  '11th',
  '12th',
  '13th',
  '14th',
  '15th',
  '16th',
  '17th',
  '18th',
  '19th',
  '20th',
  '21st',
  '22nd',
  '23rd',
  '24th',
  '25th',
  '26th',
  '27th',
  '28th',
  '29th',
  '30th',
  '31st',
];

describe('getDateInfo', () => {
  sufixes.forEach((item, index) => {
    test(item, () => {
      expect(getDateInfo(`2018-01-${index + 1}`)).toEqual({
        day: index + 1,
        dayText: item,
        month: 1,
      });
    });
  });
});

describe('sendAnalyticsEvent', () => {
  test('default', () => {
    window.ga = jest.fn();
    sendAnalyticsEvent('category', 'action', 'label', 'value');
    expect(window.ga).toHaveBeenCalledWith('send', 'event', 'category', 'action', 'label', 'value');
  });
});

describe(sortEventDates, () => {
  test('default', () => {
    const result = sortEventDates(
      {
        event1Date: '2017-12-30',
        event2Date: '2018-01-11',
        event3Date: '2018-01-17',
        event4Date: '2018-01-20',
        event5Date: '2018-01-10',
      },
      3
    );

    expect(result).toEqual([
      { date: '2017-12-30', number: 1 },
      { date: '2018-01-10', number: 5 },
      { date: '2018-01-11', number: 2 },
    ]);
  });
});
