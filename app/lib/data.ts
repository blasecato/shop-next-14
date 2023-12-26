import { PrismaClient } from "@prisma/client";

export async function getCategories() {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany();
  return categories;
}
