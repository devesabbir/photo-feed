import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export function GET(req, { params }) {
  const { id } = params;
  const data = getPhotoById(id);

  return NextResponse.json({
    status: 200,
    data: data,
  });
}
