// src/pages/Products.tsx

import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "../data/products";

type Props = {
  addToCart: (id: number) => void;
};

export default function Products({ addToCart }: Props) {
  return (
    <div className="p-6 mt-16">
      <h2 className="text-3xl font-bold mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4 flex flex-col gap-2">
              <img
                src={product.image}
                alt=""
                className="w-full h-48 object-contain rounded"
              />
              <h3 className="text-xl font-semibold mt-7">{product.name}</h3>
              <p className="text-gray-600">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
              <p className="text-sm text-gray-500">{product.description}</p>
              <Button asChild className="mt-7">
                <Link to={`/products/${product.id}`}>Lihat Detail</Link>
              </Button>
              <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
