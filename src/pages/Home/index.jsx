import CheckIn from "../../components/CheckIn";
import Dashboard from "../../components/Dashboard";
import * as S from "./style";

function Home() {
  return (
    <S.Wrapper>
      <S.Container>
        <CheckIn />
        <Dashboard />
      </S.Container>
    </S.Wrapper>
  );
}

export default Home;
