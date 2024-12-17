import SearchIcon from "@assets/search.svg";
import * as S from "./style";
import Member from "@components/Member";

function FloorStatus({ floor, noshow, room, name, time }) {
  return (
    <S.Wrapper>
      <S.Floor>
        {floor}층 {noshow ? "미입실" : "입실"} 현황
      </S.Floor>
      <S.SearchBox>
        <S.Input
          placeholder="방 호수, 이름 등을 검색해보세요"
          type="text"
          maxLength={10}
        />
        <img src={SearchIcon} alt="Search Icon" />
      </S.SearchBox>
      <S.MemberBox>
        <Member room={room} name={name} time={time} />
      </S.MemberBox>
      <S.Shadow />
    </S.Wrapper>
  );
}

export default FloorStatus;
