import * as S from "./style";
import google from "@assets/google.svg";
import cancel from "@assets/cancel.svg";

function LoginModal({ onClose }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleGoogleLogin = () => {
    window.location.href = import.meta.env.VITE_GOOGLE_OAUTH_URL;
  };

  return (
    <S.Wrapper onClick={handleBackgroundClick}>
      <S.Container>
        <S.Text>로그인</S.Text>
        <S.GoogleBtn onClick={handleGoogleLogin}>
          <img src={google} alt="google" />
          Google 계정으로 로그인
        </S.GoogleBtn>
        <S.Img src={cancel} onClick={handleBackgroundClick} />
      </S.Container>
    </S.Wrapper>
  );
}

export default LoginModal;
