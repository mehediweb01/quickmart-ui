import { totalProductAdded } from "../../../../public/data/db";

export async function GET() {
  return Response.json(totalProductAdded);
}
