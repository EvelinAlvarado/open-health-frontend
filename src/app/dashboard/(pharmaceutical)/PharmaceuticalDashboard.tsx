import DashboardHeader from "@/components/DashboardHeader";
import { useAuth } from "@/hooks/useAuth";

export default function PharmaceuticalDashboard() {
  const { user } = useAuth();
  const userName = user?.name || "Usuário";
  return (
    <section>
      {/* <DashboardHeader
        userName={userName}
        description="Aqui você pode consultar receitas médicas e gerenciar o histórico de medicamentos dispensados."
      /> */}
      {/* conteudo */}
    </section>
  );
}