import { getPostsFromNotion, getPageContent } from "@/app/libs/notion";

export default async function PostPage({ params } : {params : String}) {
  const posts = await getPostsFromNotion(process.env.NOTION_DB!);
  const post = posts.find(p => p.slug === params.slug);

  const blocks = await getPageContent(post.id);

  return <div>{JSON.stringify(blocks)}</div>;
}
