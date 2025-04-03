import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import { Card, Form, Input, Button, Typography, Alert } from "antd";

const { Title, Text } = Typography;

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const navigate = useNavigate();

  async function handleSubmit() {
    setMessage(null);
    const success = await register(name, email, password);
    if (success) {
      setMessage({ type: "success", text: "Cadastro realizado com sucesso!" });
      setTimeout(() => navigate("/login"), 2000); 
    } else {
      setMessage({ type: "error", text: "Erro ao cadastrar. Verifique se o email já está cadastrado." });
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card style={{ width: 400, padding: "2rem", textAlign: "center" }}>
        <Title level={2}>Cadastro</Title>
        {message && <Alert message={message.text} type={message.type} showIcon style={{ marginBottom: "1rem" }} />}
        <Form onFinish={handleSubmit} layout="vertical">
          <Form.Item label="Nome" name="name" rules={[{ required: true, message: "Digite seu nome!" }]}>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Digite seu email!" }]}>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Senha" name="password" rules={[{ required: true, message: "Digite sua senha!" }]}>
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
        <Text style={{ display: "block", textAlign: "center", marginTop: "1rem" }}>
          Já possui login? <a onClick={() => navigate("/login")}>Entrar aqui</a>
        </Text>
      </Card>
    </div>
  );
}
