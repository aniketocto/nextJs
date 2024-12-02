// nested dynamic routes

import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: {
    reviews: string;
    productId: string;
  };
}) {
  if (parseInt(params.reviews) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviews} for product {params.productId}
    </h1>
  );
}
