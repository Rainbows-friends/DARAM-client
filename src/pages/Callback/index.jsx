import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 환경 변수와 상수를 분리
const SIGNIN_API_URL = import.meta.env.VITE_SIGNIN_API_URL;

// 토큰 저장 로직
const saveTokensToLocalStorage = ({
  accessToken,
  refreshToken,
  accessTokenExpiresIn,
  refreshTokenExpiresIn,
  role,
}) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  localStorage.setItem("accessTokenExpiresIn", accessTokenExpiresIn);
  localStorage.setItem("refreshTokenExpiresIn", refreshTokenExpiresIn);
  localStorage.setItem("role", JSON.stringify(role));
};

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get("code");

        if (!code) {
          toast.error("로그인 코드가 없습니다. 홈으로 이동합니다.");
          navigate("/home");
          return;
        }

        // 서버로 인증 코드 전송
        const response = await axios.post(
          SIGNIN_API_URL,
          { code: decodeURIComponent(code) },
          { headers: { "Content-Type": "application/json" } }
        );

        const tokens = response.data.body;

        if (tokens.accessToken && tokens.refreshToken) {
          saveTokensToLocalStorage(tokens);
          toast.success("로그인 되었습니다.");
          navigate("/home");
        } else {
          throw new Error("유효하지 않은 토큰");
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          (error.request
            ? "서버에 연결할 수 없습니다"
            : "요청 중 오류가 발생했습니다");
        toast.error(`로그인 실패: ${errorMessage}`);
        console.error("Error details:", error);
        navigate("/home");
      }
    };

    handleLogin();
  }, [navigate]);

  return <div>로그인 처리 중입니다...</div>;
}

export default Callback;
