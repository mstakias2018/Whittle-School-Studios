/* eslint-disable max-len */
import { parseInsetContent } from './strings';

describe('parseInsetContent', () => {
  test('image', () => {
    const markdown =
      '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      filteredMarkdown:
        '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.',
      images: [
        {
          hasVideo: false,
          url: '//images.contentful.com/a/b/c/daffodils.jpg',
        },
      ],
      videoEmbedCodes: [],
    });
  });

  test('video', () => {
    const markdown =
      '![daffodils](<iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      filteredMarkdown: '![daffodils--VIDEO-0](VIDEO-NO-COVER-IMAGE)Lorem ipsum.',
      images: [],
      videoEmbedCodes: ['<iframe src="http://test.com" allowfullscreen></iframe>'],
    });
  });

  test('video with cover photo', () => {
    const markdown =
      '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg <iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      filteredMarkdown:
        '![daffodils--VIDEO-0](//images.contentful.com/a/b/c/daffodils.jpg)Lorem ipsum.',
      images: [
        {
          hasVideo: true,
          url: '//images.contentful.com/a/b/c/daffodils.jpg',
        },
      ],
      videoEmbedCodes: ['<iframe src="http://test.com" allowfullscreen></iframe>'],
    });
  });

  test('video with caption', () => {
    const markdown =
      '![daffodils]("My caption" <iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      filteredMarkdown:
        '![daffodils--VIDEO-0](VIDEO-NO-COVER-IMAGE "My caption")Lorem ipsum.',
      images: [],
      videoEmbedCodes: ['<iframe src="http://test.com" allowfullscreen></iframe>'],
    });
  });

  test('video with cover photo and caption', () => {
    const markdown =
      '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption" <iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      filteredMarkdown:
        '![daffodils--VIDEO-0](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.',
      images: [
        {
          hasVideo: true,
          url: '//images.contentful.com/a/b/c/daffodils.jpg',
        },
      ],
      videoEmbedCodes: ['<iframe src="http://test.com" allowfullscreen></iframe>'],
    });
  });

  test('multiple videos', () => {
    const markdown =
      '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption" <iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.![children](<iframe src="http://test2.com" allowfullscreen></iframe>)';
    expect(parseInsetContent(markdown)).toEqual({
      filteredMarkdown:
        '![daffodils--VIDEO-0](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.![children--VIDEO-1](VIDEO-NO-COVER-IMAGE)',
      images: [
        {
          hasVideo: true,
          url: '//images.contentful.com/a/b/c/daffodils.jpg',
        },
      ],
      videoEmbedCodes: [
        '<iframe src="http://test.com" allowfullscreen></iframe>',
        '<iframe src="http://test2.com" allowfullscreen></iframe>',
      ],
    });
  });

  test('one image, one video', () => {
    const markdown =
      '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.![children](//images.contentful.com/a/b/c/children.jpg "My caption" <iframe src="http://test.com" allowfullscreen></iframe>)';
    expect(parseInsetContent(markdown)).toEqual({
      filteredMarkdown:
        '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.![children--VIDEO-0](//images.contentful.com/a/b/c/children.jpg "My caption")',
      images: [
        {
          hasVideo: false,
          url: '//images.contentful.com/a/b/c/daffodils.jpg',
        },
        {
          hasVideo: true,
          url: '//images.contentful.com/a/b/c/children.jpg',
        },
      ],
      videoEmbedCodes: [
        '<iframe src="http://test.com" allowfullscreen></iframe>',
      ],
    });
  });
});
