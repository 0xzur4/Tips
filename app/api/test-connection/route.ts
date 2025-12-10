import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    // coba panggil serverStatus atau listCollections kecil untuk memastikan koneksi
    // pakai listCollections yang ringan
    const collections = await db.listCollections().toArray();
    return NextResponse.json({
      ok: true,
      dbName: db.databaseName,
      collections: collections.map((c) => c.name).slice(0, 20) // tampilkan sampai 20
    });
  } catch (err) {
    console.error("DB connection error:", err);
    return NextResponse.json({
      ok: false,
      error: String(err)
    }, { status: 500 });
  }
}