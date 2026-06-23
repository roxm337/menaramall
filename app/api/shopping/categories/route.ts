import { sourceShoppingCategories } from "@/lib/data/source-api";

export const dynamic = "force-static";

export function GET() {
  return Response.json(sourceShoppingCategories);
}
