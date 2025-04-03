import axios from "axios"

const API_URL = "http://localhost:5023/api/auth"

export async function login(email: string, password: string): Promise<{ token: string }> {
  const response = await axios.post<{ token: string }>(`${API_URL}/login`, { email, password })
  return response.data
}

export async function register(name: string, email: string, password: string) {
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  return response.data;
}

export async function getProducts() {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error("Erro ao buscar produtos", error)
    return []
  }
}

export async function getProductById(id: number) {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error(`Erro ao buscar produto ID: ${id}`, error)
    return null
  }
}

export async function createProduct(name: string, description: string, price: number) {
  try {
    const response = await axios.post(API_URL, { name, description, price })
    return response.data
  } catch (error) {
    console.error("Erro ao criar produto", error)
    return null
  }
}

export async function updateProduct(id: number, name: string, description: string, price: number) {
  try {
    await axios.put(`${API_URL}/${id}`, { name, description, price })
    return true
  } catch (error) {
    console.error(`Erro ao atualizar produto ID: ${id}`, error)
    return false
  }
}

export async function deleteProduct(id: number) {
  try {
    await axios.delete(`${API_URL}/${id}`)
    return true
  } catch (error) {
    console.error(`Erro ao excluir produto ID: ${id}`, error)
    return false
  }
}
