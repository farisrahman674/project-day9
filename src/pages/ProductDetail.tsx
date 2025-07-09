// src/pages/ProductDetail.tsx

import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Button } from "@/components/ui/button";

type Props = {
  addToCart: (id: number) => void;
};
export default function ProductDetail({ addToCart }: Props) {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));

  if (!product) return <p>Produk tidak ditemukan</p>;

  return (
    <div className="p-6 max-w-xl mx-auto mt-16">
      <img src={product.image} alt="" />
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="text-lg mb-2">Rp {product.price.toLocaleString("id-ID")}</p>
      <p className="text-gray-700">{product.description}</p>
      <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
    </div>
  );
}
