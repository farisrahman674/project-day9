// src/components/Header.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold">MyStore</h1>
      <nav className="flex gap-4">
        <Button asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button asChild>
          <Link to="/products">Products</Link>
        </Button>
        <Button asChild>
          <Link to="/cart">Cart</Link>
        </Button>
      </nav>
    </header>
  );
}
