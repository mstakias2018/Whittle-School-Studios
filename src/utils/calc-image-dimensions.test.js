import { calcDimensions, calcDimensionsForBP } from './calc-image-dimensions';
import { IMAGE_SIZE, IMAGE_SUBTYPE } from '../constants/images';
import { BREAKPOINTS_NAME } from '../constants/breakpoints';

const RATIO = {
  RECT: 9 / 16,
  SQUARE: 1,
};

describe('calcDimensions', () => {
  test('default', () => {
    const result = calcDimensions({
      [IMAGE_SUBTYPE.MAIN_CATEGORY]: {
        [BREAKPOINTS_NAME.small]: { colRatio: 1, heightRatio: RATIO.SQUARE },
        [BREAKPOINTS_NAME.medium]: { colRatio: 1, heightRatio: RATIO.RECT },
        [BREAKPOINTS_NAME.large]: { colRatio: 1, heightRatio: 400 / 940 },
      },
    });

    expect(result).toEqual({
      mainCat: {
        lg: { height: 401, width: 941 },
        lgMid: { height: 554, width: 1300 },
        md: { height: 400, width: 710 },
        mdMid: { height: 510, width: 905 },
        sm: { height: 320, width: 320 },
        smMid: { height: 495, width: 495 },
      },
    });
  });
});

describe('calcDimensionsForBP', () => {
  test('rect full width image, small bp', () => {
    const result = calcDimensionsForBP(
      IMAGE_SIZE.SMALL,
      1,
      9 / 16
    );

    expect(result).toEqual({
      height: 180,
      width: 320,
    });
    expect(result.width * (9 / 16)).toBe(result.height);
  });

  test('square half width image, xlg bp', () => {
    const result = calcDimensionsForBP(
      IMAGE_SIZE.LARGE_MID,
      6 / 12,
      1
    );

    expect(result).toEqual({
      height: 640,
      width: 640,
    });
    expect(result.width).toEqual(result.height);
  });
});
