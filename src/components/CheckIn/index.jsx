import * as S from "./style";

function CheckIn({ time, loading, error }) {
  const renderTime = loading
    ? "로딩 중..."
    : error
    ? "서버 에러"
    : time
    ? `${time.remainTime}`
    : "시간 정보 없음";

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
        <S.LoginBtn>
          <S.Text fontWeight="600">로그인</S.Text>
        </S.LoginBtn>
      </S.MyStatus>
    </S.Wrapper>
  );
}

export default CheckIn;
