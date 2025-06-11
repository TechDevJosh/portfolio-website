import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getPublishedPosts() {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
    sorts: [
      {
        property: 'Publish Date',
        direction: 'descending',
      },
    ],
  });

  return res.results;
}

export async function getPageBySlug(slug: string) {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  });

  return res.results[0]; // return first matched page
}

export async function getPageContentBlocks(pageId: string) {
  const response = await notion.blocks.children.list({
    block_id: pageId,
  });

  return response.results;
}
