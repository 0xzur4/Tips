import { getPostsFromNotion } from "../libs/notion";
import Link from "next/link";

export default async function Coba() {
  const posts = await getPostsFromNotion(process.env.NOTION_DB!);

  return (
    <div>
      {posts.map(post => (
        <section key={post.id}>
          <Link href="/coba">{post.title}</Link>
          <p>{post.description}</p>
        </section>
      ))}
    </div>
  );
}