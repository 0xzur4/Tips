"use client"

import CreatePostForm from "../components/postForm"
import { useState} from "react"
import { Post } from "@/types/post"

export default function dashboardPgae(){
    const [created, setCreated] = useState<Post | null>(null)
    return(
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buat Post</h1>

      <CreatePostForm onCreated={(p) => {
        setCreated(p);
        alert("Post berhasil dibuat!");
      }} />

      {created && (
        <div className="mt-6 p-4 border rounded">
          <h2 className="font-semibold">Post terbaru:</h2>
          <p><strong>Title:</strong> {created.title}</p>
          <p><strong>Content:</strong>{created.content}</p>
          <p><strong>Author:</strong> {created.author ?? "-"}</p>
        </div>
      )}
    </main>
    )
}