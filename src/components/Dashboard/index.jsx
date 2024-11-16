import InfoSection from "../InfoSection";
import * as S from "./style";

function Dashboard() {
  return (
    <S.Wrapper>
      <InfoSection text="기숙사 입실 현황" />
      <InfoSection text="미입실자 현황" />
      <InfoSection text="공지사항" />
    </S.Wrapper>
  );
}

export default Dashboard;
