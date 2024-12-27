import * as S from "./style";

function Member({ room, name, time }) {
  return (
    <S.Wrapper>
      <S.RoomAndName>
        {room}호 {name}
      </S.RoomAndName>
      {time ? <S.Time>{time}</S.Time> : null}
    </S.Wrapper>
  );
}

export default Member;
