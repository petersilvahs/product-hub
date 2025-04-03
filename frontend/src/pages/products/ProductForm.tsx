import { useState, useEffect } from "react"
import { createProduct, getProductById, updateProduct } from "../../services/productService"
import { useNavigate, useParams } from "react-router-dom"

export function ProductForm() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id) {
      async function loadProduct() {
        const product = await getProductById(Number(id))
        setName(product.name)
        setDescription(product.description)
        setPrice(String(product.price))
      }
      loadProduct()
    }
  }, [id])

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const product = { name, description, price: Number(price) }

    if (id) {
      await updateProduct(Number(id), product)
    } else {
      await createProduct(product)
    }

    navigate("/products")
  }

  return (
    <div>
      <h2>{id ? "Editar Produto" : "Adicionar Produto"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="number" placeholder="Preço" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">{id ? "Atualizar" : "Cadastrar"}</button>
      </form>
    </div>
  )
}
