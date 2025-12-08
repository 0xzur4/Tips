import { getPostsFromNotion } from "@/app/libs/notion";

export async function GET() {
    const posts = await getPostsFromNotion(process.env.NOTION_DATABASE_ID!);
    return Response.json(posts)
}