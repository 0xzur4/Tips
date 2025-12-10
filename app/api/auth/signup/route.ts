// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(1)
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = bodySchema.parse(body);

    const db = await getDb();
    const users = db.collection("users");

    // cek email atau username sudah ada
    const exist = await users.findOne({
      $or: [{ email: parsed.email }, { username: parsed.username }]
    });
    if (exist) {
      return NextResponse.json({ error: "Email atau username sudah terpakai" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(parsed.password, 10);
    const now = new Date();
    const result = await users.insertOne({
      email: parsed.email,
      username: parsed.username,
      password: hashed,
      createdAt: now
    });

    return NextResponse.json({ ok: true, userId: result.insertedId.toString() }, { status: 201 });
  } catch (err: any) {
    console.error("signup error:", err);
    if (err?.issues) return NextResponse.json({ error: err.issues }, { status: 400 });
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
