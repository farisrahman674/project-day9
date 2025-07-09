import "./App.css";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
  const [cart, setCart] = useState<number[]>([]); // simpan array ID produk

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
