import { testimonialsData } from "../../../../public/data/db";

export async function GET() {
  return Response.json(testimonialsData);
}
