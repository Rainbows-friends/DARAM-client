import { useState, useEffect } from "react";
import * as S from "./style";
import LoginModal from "@components/LoginModal";

function CheckIn({ time, loading, error }) {
  const [showModal, setShowModal] = useState(false);

  const renderTime = loading
    ? "로딩 중..."
    : error
    ? "서버 에러"
    : time
    ? `${time.remainTime}`
    : "시간 정보 없음";

  const handleLoginClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <S.Wrapper>
      <div>
        <S.Title>DARAM</S.Title>
        <S.Time>{renderTime}</S.Time>
      </div>
      <S.MyStatus>
        <S.RoomNumber>
          <S.Text fontSize="20px" fontWeight="500">
            다람과 함께 하고 싶다면?
          </S.Text>
        </S.RoomNumber>
        <S.LoginBtn onClick={handleLoginClick}>
          <S.Text fontWeight="600">로그인</S.Text>
        </S.LoginBtn>
      </S.MyStatus>
      {showModal && <LoginModal onClose={handleCloseModal} />}
    </S.Wrapper>
  );
}

export default CheckIn;
