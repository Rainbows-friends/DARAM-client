import FloorStatus from "@components/FloorStatus";
import * as S from "./style";

function CheckIn() {
  return (
    <S.Wrapper>
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
