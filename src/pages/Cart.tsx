import { products } from "../data/products";
import { Card, CardContent } from "@/components/ui/card";
type Props = {
  cart: number[];
};

export default function Cart({ cart }: Props) {
  const cartItems = products.filter((p) => cart.includes(p.id));

  return (
    <div className="p-6 mt-16">
      <h2 className="text-3xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang masih kosong</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3xl ">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4 flex flex-col gap-2">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 object-contain rounded"
                />
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  Rp {item.price.toLocaleString("id-ID")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
