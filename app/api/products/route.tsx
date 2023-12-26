import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}
