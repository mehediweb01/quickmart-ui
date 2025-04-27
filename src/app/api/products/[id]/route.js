import { productsData } from "../../../../../public/data/db";

export async function GET(_, { params }) {
  const { id } = params;
  const product = productsData.find((p) => p.id.toString() === id);

  if (product) {
    return Response.json(product);
  } else {
    return new Response(JSON.stringify({ message: "Product not found" }), {
      status: 404,
    });
  }
}
