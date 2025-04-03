import { useEffect, useState } from "react"
import { getProducts, deleteProduct, Product } from "../../services/productService"
import { useNavigate } from "react-router-dom"

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts()
      setProducts(data)
    }
    loadProducts()
  }, [])

  async function handleDelete(id: number) {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      await deleteProduct(id)
      setProducts(products.filter((product) => product.id !== id))
    }
  }

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <button onClick={() => navigate("/products/new")}>Adicionar Produto</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.description} - R$ {product.price}
            <button onClick={() => navigate(`/products/edit/${product.id}`)}>Editar</button>
            <button onClick={() => handleDelete(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
