/* eslint-disable max-len */
import { parseInsetContent } from './strings';

describe('parseInsetContent', () => {
  test('image', () => {
    const markdown =
      '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      assets: [
        {
          alt: 'daffodils',
          imageUrl: '//images.contentful.com/a/b/c/daffodils.jpg',
        },
      ],
      filteredMarkdown:
        '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.',
    });
  });

  test('video', () => {
    const markdown =
      '![daffodils](<iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      assets: [{
        alt: 'daffodils',
        videoEmbedCode: '<iframe src="http://test.com" allowfullscreen></iframe>',
      }],
      filteredMarkdown: '![daffodils--VIDEO-0](VIDEO-NO-COVER-IMAGE)Lorem ipsum.',
    });
  });

  test('video with cover photo', () => {
    const markdown =
      '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg <iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      assets: [{
        alt: 'daffodils',
        imageUrl: '//images.contentful.com/a/b/c/daffodils.jpg',
        videoEmbedCode: '<iframe src="http://test.com" allowfullscreen></iframe>',
      }],
      filteredMarkdown:
        '![daffodils--VIDEO-0](//images.contentful.com/a/b/c/daffodils.jpg)Lorem ipsum.',
    });
  });

  test('video with caption', () => {
    const markdown =
      '![daffodils]("My caption" <iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      assets: [{
        alt: 'daffodils',
        videoEmbedCode: '<iframe src="http://test.com" allowfullscreen></iframe>',
      }],
      filteredMarkdown:
        '![daffodils--VIDEO-0](VIDEO-NO-COVER-IMAGE "My caption")Lorem ipsum.',
    });
  });

  test('video with cover photo and caption', () => {
    const markdown =
      '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption" <iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      assets: [{
        alt: 'daffodils',
        imageUrl: '//images.contentful.com/a/b/c/daffodils.jpg',
        videoEmbedCode: '<iframe src="http://test.com" allowfullscreen></iframe>',
      }],
      filteredMarkdown:
        '![daffodils--VIDEO-0](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.',
    });
  });

  test('multiple videos', () => {
    const markdown =
      '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption" <iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.![children](<iframe src="http://test2.com" allowfullscreen></iframe>)';
    expect(parseInsetContent(markdown)).toEqual({
      assets: [
        {
          alt: 'daffodils',
          imageUrl: '//images.contentful.com/a/b/c/daffodils.jpg',
          videoEmbedCode: '<iframe src="http://test.com" allowfullscreen></iframe>',
        },
        {
          alt: 'children',
          videoEmbedCode: '<iframe src="http://test2.com" allowfullscreen></iframe>',
        },
      ],
      filteredMarkdown:
        '![daffodils--VIDEO-0](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.![children--VIDEO-1](VIDEO-NO-COVER-IMAGE)',
    });
  });

  test('one image, one video', () => {
    const markdown =
      '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.![children](//images.contentful.com/a/b/c/children.jpg "My caption" <iframe src="http://test.com" allowfullscreen></iframe>)';
    expect(parseInsetContent(markdown)).toEqual({
      assets: [
        {
          alt: 'daffodils',
          imageUrl: '//images.contentful.com/a/b/c/daffodils.jpg',
        },
        {
          alt: 'children',
          imageUrl: '//images.contentful.com/a/b/c/children.jpg',
          videoEmbedCode: '<iframe src="http://test.com" allowfullscreen></iframe>',
        },
      ],
      filteredMarkdown:
        '![daffodils](//images.contentful.com/a/b/c/daffodils.jpg "My caption")Lorem ipsum.![children--VIDEO-0](//images.contentful.com/a/b/c/children.jpg "My caption")',
    });
  });

  test('just text', () => {
    const markdown = 'Lorem ipsum.';
    expect(parseInsetContent(markdown)).toEqual({
      assets: [],
      filteredMarkdown: 'Lorem ipsum.',
    });
  });
});
