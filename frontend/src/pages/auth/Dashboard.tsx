import { Card, Typography } from "antd";

const { Title } = Typography;

export function Dashboard() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card style={{ width: 400, padding: "2rem", textAlign: "center" }}>
        <Title level={2}>Bem vindo ao Votorantim</Title>
      </Card>
    </div>
  );
}
