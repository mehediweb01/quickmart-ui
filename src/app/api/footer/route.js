import { footerData } from "../../../../public/data/db";

export async function GET() {
  return Response.json(footerData);
}
