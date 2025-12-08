import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getPostsFromNotion(databaseId: string) {
  const res = await notion.databases.query({
    database_id: databaseId,
  });
  return res.results.map((page: any) => ({
    id: page.id,
    title:
      page.properties?.Title?.title?.[0]?.plain_text || "Untitled",
    description: 
      page.properties?.Title?.title?.[0]?.rich_text || "",
    slug:
      page.properties?.Slug?.rich_text?.[0]?.plain_text || "",
  }));
}

export async function getPageContent(pageId: string) {
  const blocks = [];
  let cursor;

  do {
    const res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });

    blocks.push(...res.results);
    cursor = res.has_more ? res.next_cursor : null;
  } while (cursor);

  return blocks;
}

console.log(process.env.NOTION_TOKEN)
console.log(process.env.NOTION_DB)

