import { adaptSourcesBySize, getIdFromImgUrl, getLocaleIdFromImgUrl, cleanImageData } from './images';

describe('adaptSourcesBySize', () => {
  it('formats image data and sorts breakpoints', () => {
    const result = adaptSourcesBySize({
      id: '123',
      lg: {
        src: '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=621&h=350&q=100&fit=fill&f=faces',
        srcSet: [
          '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=621&h=350&q=100&fit=fill&f=faces 1x',
          '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=932&h=525&q=100&fit=fill&f=faces 1.5x',
          '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=1242&h=700&q=100&fit=fill&f=faces 2x',
          '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=1863&h=1050&q=100&fit=fill&f=faces 3x',
        ],
      },
      sm: {
        src: '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=238&h=134&q=100&fit=fill&f=faces',
        srcSet: [
          '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=238&h=134&q=100&fit=fill&f=faces 1x',
          '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=357&h=201&q=100&fit=fill&f=faces 1.5x',
          '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=476&h=268&q=100&fit=fill&f=faces 2x',
          '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=714&h=402&q=100&fit=fill&f=faces 3x',
        ],
      },
    });

    expect(result).toEqual({
      largestBreakpoint: 'lg',
      largestSrc: '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=621&h=350&q=100&fit=fill&f=faces',
      sourceList: [
        {
          breakpoint: 'sm',
          media: '(max-width: 375px)',
          src: '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=238&h=134&q=100&fit=fill&f=faces',
          srcSet: [
            '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=238&h=134&q=100&fit=fill&f=faces 1x',
            '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=357&h=201&q=100&fit=fill&f=faces 1.5x',
            '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=476&h=268&q=100&fit=fill&f=faces 2x',
            '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=714&h=402&q=100&fit=fill&f=faces 3x',
          ],
        },
        {
          breakpoint: 'lg',
          media: '(max-width: 1280px)',
          src: '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=621&h=350&q=100&fit=fill&f=faces',
          srcSet: [
            '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=621&h=350&q=100&fit=fill&f=faces 1x',
            '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=932&h=525&q=100&fit=fill&f=faces 1.5x',
            '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=1242&h=700&q=100&fit=fill&f=faces 2x',
            '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=1863&h=1050&q=100&fit=fill&f=faces 3x',
          ],
        },
      ],
    });
  });

  test('no data', () => {
    const result = adaptSourcesBySize({});

    expect(result).toEqual({
      largestBreakpoint: '',
      largestSrc: '',
      sourceList: [],
    });
  });
});

describe('getIdFromImgUrl', () => {
  test('default', () => {
    const url = '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=621&h=350&q=100&fit=fill&f=faces';
    expect(getIdFromImgUrl(url)).toBe('123');
  });
});

describe('getLocaleIdFromImgUrl', () => {
  test('default', () => {
    const url = '//images.contentful.com/udx5f2jyw09i/123/456/campus.jpg?w=621&h=350&q=100&fit=fill&f=faces';
    expect(getLocaleIdFromImgUrl(url)).toBe('456');
  });
});

describe('cleanImageData', () => {
  it('replaces empty objects with undefined', () => {
    const result = cleanImageData([[], [{ id: '123' }, {}], {}, { id: '456' }]);

    expect(result).toEqual([[], [{ id: '123' }, undefined], undefined, { id: '456' }]);
  });
});
