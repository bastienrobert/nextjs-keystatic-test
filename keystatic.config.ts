import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        authors: fields.array(
          fields.relationship({
            label: 'Authors',
            description: 'A list of authors for this post',
            collection: 'authors',
          }),
          {
            label: 'Authors',
            itemLabel: (props) => props.value || '',
          }
        ),
      },
      previewUrl: `/preview/start?branch={branch}&to=/posts/{slug}`,
    }),
    authors: collection({
      label: 'Authors',
      slugField: 'title',
      path: 'content/authors/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
