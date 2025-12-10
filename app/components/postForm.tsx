// app/components/CreatePostForm.tsx
"use client";

import { useState } from "react";
import { Post } from "@/types/post";

export default function CreatePostForm({ onCreated }: { onCreated?: (post: Post) => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!title.trim()) {
      setError("Title wajib diisi");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        title: title.trim(),
        content: content,
        author: author || undefined,
        tags: tags ? tags.split(",").map(t => t.trim()).filter(Boolean) : undefined
      };

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ? JSON.stringify(data.error) : "Gagal membuat post");
      } else {
        // reset form
        setTitle("");
        setContent("");
        setAuthor("");
        setTags("");
        if (onCreated) onCreated(data);
      }
    } catch (e) {
      console.error(e);
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-xl">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border rounded p-2"
          placeholder="Judul postingan"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full border rounded p-2"
          rows={6}
          placeholder="Isi postingan"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium">Author</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full border rounded p-2"
            placeholder="Nama penulis (opsional)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Tags (comma separated)</label>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 block w-full border rounded p-2"
            placeholder="tutorial, nextjs, mongodb"
          />
        </div>
      </div>

      {error && <div className="text-red-600 text-sm">{error}</div>}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60"
        >
          {loading ? "Menyimpan..." : "Buat Post"}
        </button>
      </div>
    </form>
  );
}
