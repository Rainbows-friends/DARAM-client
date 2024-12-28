import { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isValidToken, setIsValidToken] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          throw new Error("액세스 토큰을 찾을 수 없습니다.");
        }

        const response = await axios.get(
          import.meta.env.VITE_VALID_TOKEN_API_URL,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        if (response.data === true) {
          setIsValidToken(true);
        } else {
          throw new Error("잘못된 토큰");
        }
      } catch (error) {
        toast.error("로그인이 필요한 페이지입니다.");
        navigate("/home");
      }
    };

    validateToken();
  }, [navigate]);

  if (isValidToken === null) {
    return null;
  }

  return isValidToken ? children : null;
};

export default ProtectedRoute;
