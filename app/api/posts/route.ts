// app/api/posts/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { z } from "zod";

const createSchema = z.object({
  title: z.string().min(1, "Title wajib diisi"),
  content: z.string().optional().default(""),
  author: z.string().optional(),
  tags: z.array(z.string()).optional()
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = createSchema.parse(body);

    const db = await getDb();
    const collection = db.collection("posts");

    const now = new Date();
    const doc = {
      ...parsed,
      createdAt: now,
      updatedAt: now
    };

    const result = await collection.insertOne(doc);
    const inserted = await collection.findOne({ _id: result.insertedId });

    if (!inserted) {
      return NextResponse.json({ error: "Insert failed" }, { status: 500 });
    }

    // normalize fields for client
    const normalized = {
      ...inserted,
      _id: inserted._id.toString(),
      createdAt: inserted.createdAt?.toISOString?.() ?? null,
      updatedAt: inserted.updatedAt?.toISOString?.() ?? null
    };

    return NextResponse.json(normalized, { status: 201 });
  } catch (err: any) {
    console.error("POST /api/posts error:", err);
    if (err?.issues) {
      // zod validation
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
