import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/authService"
import { Card, Form, Input, Button, Typography, Alert } from "antd"

const { Title, Text } = Typography

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error" , text: string } | null>(null)
  const navigate = useNavigate()

  async function handleSubmit() {
    setMessage(null)
    try {
      const { token } = await login(email, password)
      if (token) {
        setMessage({ type: "success", text: "Login feito com sucesso!" })
        localStorage.setItem("token", token)
        setTimeout(() => navigate("/logado"), 2000)
      } else {
        setMessage({ type: "error", text: "Falha no login. Verifique suas credenciais." })
      }
    } catch (error) {
      console.error("Erro ao tentar fazer login:", error)
      setMessage({ type: "error", text: "Erro de conexão. Verifique sua internet e o servidor." })
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card style={{ width: 400, padding: "2rem", textAlign: "center" }}>
        <Title level={2}>Login</Title>
        {message && <Alert message={message.text} type={message.type} showIcon style={{ marginBottom: "1rem" }} />}
        <Form onFinish={handleSubmit} layout="vertical">
          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Digite seu email!" }]}>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Senha" name="password" rules={[{ required: true, message: "Digite sua senha!" }]}>
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Entrar
            </Button>
          </Form.Item>
        </Form>
        <Text style={{ display: "block", textAlign: "center", marginTop: "1rem" }}>
          Não possui cadastro? <a onClick={() => navigate("/register")}>Cadastrar aqui</a>
        </Text>
      </Card>
    </div>
  )
}
