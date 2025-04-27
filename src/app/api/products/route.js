import { productsData } from "../../../../public/data/db";

export async function GET() {
  return Response.json(productsData);
}
