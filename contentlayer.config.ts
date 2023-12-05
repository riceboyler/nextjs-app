// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    subtitle: { type: 'string', required: true },
    description: { type: 'string', required: false }
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}` },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '').replace('/data/posts/', '/blog/'),
    },
    params: {
      type: 'list',
      resolve: (doc) => doc._raw.flattenedPath.split('/'),
    },
  },
}));

export default makeSource({ contentDirPath: 'data/posts', documentTypes: [Post] });