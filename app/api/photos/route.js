import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export function GET() {
  const data = getAllPhotos();
  const filtered = data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.url,
  }));
  return NextResponse.json({
    status: 200,
    data: filtered,
  });
}
