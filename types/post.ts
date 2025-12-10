// types/post.ts
export interface Post {
  _id?: string; // ObjectId as string when returned to client
  title: string;
  content: string;
  author?: string;
  tags?: string[];
  createdAt?: string; // ISO string
  updatedAt?: string; // ISO string
}
