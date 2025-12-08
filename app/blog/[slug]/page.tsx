// app/blog/[slug]/page.tsx
import { getPostsFromNotion, getPageContent } from "@/app/libs/notion";
import { mapPageToPost } from "@/app/libs/mapper";
import type { Post } from "@/app/libs/types";

type Props = { params: { slug: string } };

export default async function Page({ params }: Props) {
  const postsRaw = await getPostsFromNotion(process.env.NOTION_DATABASE_ID!);
  const postRaw = postsRaw.find((p: any) => p.slug === params.slug);
  if (!postRaw) return <div>Not Found</div>;

  const blocks = await getPageContent(postRaw.id);

  return (
    <article>
      <h1>{postRaw.title}</h1>
      {/* render blocks */}
    </article>
  );
}
