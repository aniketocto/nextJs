// This is a dynamic routes the folder should be in [] to use dynamics routing

export default function ProductDetails({
  params,
}: {
  params: { productId: String };
}) {
  return (
    <div>
      <h1>Product Details {params.productId}</h1>
    </div>
  );
}
