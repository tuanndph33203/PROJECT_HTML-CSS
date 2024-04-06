import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "@/hooks/useStorage";

const AdminAuthMiddleware = ({ children }:any) => {
  const navigate = useNavigate();
  const [user] = useSessionStorage("user", null);
  useEffect(() => {
    if (!user || user.role!=="admin") {
      navigate("/");
    }
  }, [user, navigate]);
  if (!user) {
    return null;
    }
  return children;
};

export default AdminAuthMiddleware;
