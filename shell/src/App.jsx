import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RemoteErrorBoundary from "./RemoteErrorBoundary";

const Home = lazy(() => import("home/App"));
const Product = lazy(() => import("product/App"));
const Shop = lazy(() => import("shop/App"));

function App() {
  return (<BrowserRouter> <h1>E-Commerce Shell</h1>

    <nav>
      <Link to="/">Home</Link> |
      <Link to="/products">Products</Link> |
      <Link to="/shop">Shop</Link>
    </nav>

    <hr />

    <RemoteErrorBoundary>
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Suspense>
    </RemoteErrorBoundary>
  </BrowserRouter>

  );
}

export default App;
