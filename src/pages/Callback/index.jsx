import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const sendCodeToBackend = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      let code = queryParams.get("code");

      if (!code) {
        toast.error("로그인 코드가 없습니다. 홈으로 이동합니다.");
        navigate("/home");
        return;
      }

      // URL 디코딩: %2F를 /로 변환
      code = decodeURIComponent(code);

      try {
        const response = await axios.post(
          import.meta.env.VITE_SIGNIN_API_URL,
          {
            code: code,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { token } = response.data;

        if (token) {
          localStorage.setItem("token", token);
          toast.success("로그인 되었습니다.");
          navigate("/home");
        } else {
          toast.error("로그인 실패");
          navigate("/home");
        }
      } catch (error) {
        if (error.response) {
          toast.error(
            `로그인 실패: ${
              error.response.data.message || "서버 오류가 발생했습니다"
            }`
          );
        } else if (error.request) {
          toast.error("서버에 연결할 수 없습니다");
        } else {
          toast.error("요청 중 오류가 발생했습니다");
        }
        navigate("/home");
      }
    };

    sendCodeToBackend();
  }, [navigate]);

  return <div>로그인 처리 중입니다...</div>;
}

export default Callback;
