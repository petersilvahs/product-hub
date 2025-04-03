import axios from "axios"

const API_URL = "http://localhost:5023/api/products"

export type Product = {
  id: number
  name: string
  description: string
  price: number
}

export async function getProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(API_URL)
  return response.data
}

export async function getProductById(id: number): Promise<Product> {
  const response = await axios.get<Product>(`${API_URL}/${id}`)
  return response.data
}

export async function createProduct(product: { name: string; description: string; price: number }) {
  const response = await axios.post(API_URL, product)
  return response.data
}

export async function updateProduct(id: number, product: { name: string; description: string; price: number }) {
  await axios.put(`${API_URL}/${id}`, product)
}

export async function deleteProduct(id: number) {
  await axios.delete(`${API_URL}/${id}`)
}

