import * as S from "./style";
import google from "@assets/google.svg";
import cancel from "@assets/cancel.svg";

function LoginModal({ onClose }) {
  // 모달 배경 클릭 시 모달을 닫는 함수
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.Wrapper onClick={handleBackgroundClick}>
      <S.Container>
        <S.Text>로그인</S.Text>
        <S.GoogleBtn>
          <img src={google} alt="google" />
          Google 계정으로 로그인
        </S.GoogleBtn>
        <S.Img src={cancel} onClick={handleBackgroundClick} />
      </S.Container>
    </S.Wrapper>
  );
}

export default LoginModal;
