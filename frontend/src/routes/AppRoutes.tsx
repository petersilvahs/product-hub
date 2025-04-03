import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "../pages/auth/Login"
import { Register } from "../pages/auth/Register"
import { ProductList } from "../pages/products/ProductList"
import { ProductForm } from "../pages/products/ProductForm"

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/new" element={<ProductForm />} />
        <Route path="/products/edit/:id" element={<ProductForm />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  )
}
