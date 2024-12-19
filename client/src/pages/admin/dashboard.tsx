import "../../global.css";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { Sidebar } from "../../components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("http://127.0.0.1:3000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <SidebarProvider>
      <Sidebar />
      <main>
        <SidebarTrigger />
        test test
      </main>
    </SidebarProvider>
  );
}

export default Dashboard;
