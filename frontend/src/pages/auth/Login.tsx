import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/authService"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const { token } = await login(email, password)
    if (token) {
      localStorage.setItem("token", token)
      navigate("/dashboard")
    } else {
      alert("Falha no login. Verifique suas credenciais.")
    }
  }
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
