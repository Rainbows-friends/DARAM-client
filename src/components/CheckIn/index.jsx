import * as S from "./style";

import { useEffect, useState } from "react";

import LoginModal from "@components/LoginModal";
import { useAuth } from "@contexts/AuthContext";

function CheckIn({ time, loading, error, userData }) {
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated } = useAuth();

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
          {isAuthenticated ? (
            <>
              <S.Text fontSize="20px" fontWeight="600">
                {userData.grade}
                {userData.classNum}
                {userData.number} {userData.name}
              </S.Text>
              <S.Text fontSize="14px">{userData.room}호</S.Text>
            </>
          ) : (
            <S.Text fontSize="20px" fontWeight="600">
              다람과 함께 하고 싶다면?
            </S.Text>
          )}
        </S.RoomNumber>
        {!isAuthenticated ? (
          <S.LoginBtn onClick={handleLoginClick}>
            <S.Text fontWeight="600">로그인</S.Text>
          </S.LoginBtn>
        ) : (
          <S.Text>나의 지각 횟수: n회</S.Text>
        )}
      </S.MyStatus>
      {showModal && <LoginModal onClose={handleCloseModal} />}
    </S.Wrapper>
  );
}

export default CheckIn;
