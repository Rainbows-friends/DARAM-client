import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const sendCodeToBackend = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const code = queryParams.get("code");

      if (!code) {
        console.error("code가 없습니다. 로그인 실패");
        navigate("/home");
        return;
      }

      try {
        const response = await axios.post(import.meta.env.VITE_SIGNIN_API_URL, {
          header: {},
          body: { code },
        });

        const { token } = response.data;

        if (token) {
          localStorage.setItem("token", token);
          navigate("/home");
        } else {
          console.error("로그인 실패:", response.data.message);
          navigate("/home");
        }
      } catch (error) {
        console.error("서버 통신 오류:", error.response?.data || error.message);
        navigate("/home");
      }
    };

    sendCodeToBackend();
  }, [navigate]);

  return <div>로그인 처리 중입니다...</div>;
}

export default Callback;
