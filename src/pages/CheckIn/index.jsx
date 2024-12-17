import FloorStatus from "@components/FloorStatus";
import Header from "@components/Header";
import * as S from "./style";

function CheckIn() {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <FloorStatus floor={2} room={201} name={"***"} time={"09:27:13 PM"} />
        <FloorStatus floor={3} />
        <FloorStatus floor={4} />
        <FloorStatus floor={5} />
      </S.Container>
    </S.Wrapper>
  );
}

export default CheckIn;
