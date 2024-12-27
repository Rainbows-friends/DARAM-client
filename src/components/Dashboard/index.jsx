import * as S from "./style";

import InfoSection from "../InfoSection";

function Dashboard() {
  return (
    <S.Wrapper>
      <InfoSection text="입실 현황" path="/checkin" />
      <InfoSection text="미입실 현황" path="/noshow" />
      <InfoSection text="팀소개" path="/team" />
    </S.Wrapper>
  );
}

export default Dashboard;
