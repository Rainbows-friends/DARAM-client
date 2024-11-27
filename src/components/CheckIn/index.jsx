import * as S from "./style";

function CheckIn({ time, loading, error }) {
  const renderTime = () => {
    if (loading) return "로딩 중...";
    if (error) return "에러...";
    if (!time) return "시간 정보 없음";
    return `${time.hours}h${time.minutes}m${time.seconds}s`;
  };

  return (
    <S.Wrapper>
      <div>
        <S.Title>DARAM</S.Title>
        <S.Time>{renderTime()}</S.Time>
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
