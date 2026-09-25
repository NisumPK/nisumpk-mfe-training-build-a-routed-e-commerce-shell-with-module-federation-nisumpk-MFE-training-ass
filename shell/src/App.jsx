import { lazy, Suspense } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

const HomeApp = lazy(() => import('home/App'))
const ProductApp = lazy(() => import('product/App'))
const ShopApp = lazy(() => import('shop/App'))

function RemotePage({ children }) {
  const { pathname } = useLocation()

  return (
    <ErrorBoundary key={pathname}>
      <Suspense fallback={<div className="skeleton" />}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <h2>E-Commerce MFE</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{' '}
          <Link to="/shop">Shop</Link>
        </nav>
      </header>
      <main style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <RemotePage>
                <HomeApp />
              </RemotePage>
            }
          />
          <Route
            path="/products"
            element={
              <RemotePage>
                <ProductApp />
              </RemotePage>
            }
          />
          <Route
            path="/shop"
            element={
              <RemotePage>
                <ShopApp />
              </RemotePage>
            }
          />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2026 E-Commerce MFE</p>
      </footer>
    </div>
  )
}
