import * as S from "./style";

function CheckIn() {
  return (
    <S.Wrapper>
      <div>
        <S.Title>DARAM</S.Title>
        <S.Time>14m03s</S.Time>
      </div>
      <S.MyStatus>
        <S.RoomNumber>
          <S.Text fontSize="20px" fontWeight="600">
            1416 전준연
          </S.Text>
          <S.Text fontSize="14px" fontWeight="400">
            305호
          </S.Text>
        </S.RoomNumber>
        <S.Text fontSize="16px" fontWeight="400">
          나의 지각 횟수: n회
        </S.Text>
      </S.MyStatus>
    </S.Wrapper>
  );
}

export default CheckIn;
