export function ProductModel(
  sku: string,
  image: string,
  price: string,
  title: string,
  manufactureName: string,
  quantity: number,
  liked: boolean,
) {
  return {
    sku,
    image,
    price,
    title,
    manufactureName,
    quantity,
    liked,
  };
}
