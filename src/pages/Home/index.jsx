import CheckIn from "../../components/CheckIn";
import Dashboard from "../../components/Dashboard";
import Circle from "../../components/Circle";
import Character from "../../components/Character";
import junyeon from "../../asset/junyeon.svg";
import yeojin from "../../asset/yeojin.svg";
import euna from "../../asset/euna.svg";
import minsol from "../../asset/minsol.svg";
import myunghyun from "../../asset/myunghyun.svg";
import taeeun from "../../asset/taeeun.svg";
import * as S from "./style";

function Home() {
  return (
    <S.Wrapper>
      <S.Container>
        <CheckIn />
        <Dashboard />
      </S.Container>
      <Circle
        size="25rem"
        color="linear-gradient(152deg, #70E249 15.9%, #477E34 90.38%)"
        top="1.625rem"
        left="9.375rem"
      />
      <Circle
        size="6.25rem"
        color="linear-gradient(152deg, #49E2CB 15.9%, #347E5F 90.38%)"
        top="7.1875rem"
        left="51.5rem"
      />
      <Circle
        size="12.5rem"
        color="linear-gradient(152deg, #E24F49 15.9%, #7E4A34 90.38%)"
        top="32.375rem"
        left="97.125rem"
      />
      <Circle
        size="31.25rem"
        color="linear-gradient(152deg, #AA49E2 15.9%, #48347E 90.38%)"
        top="94.75rem"
        left="-6.25rem"
      />
      <Circle
        size="18.75rem"
        color="linear-gradient(152deg, #E2CE49 15.9%, #7E5D34 90.38%)"
        top="53.4375rem"
        left="29.375rem"
      />
      <Circle
        size="25rem"
        color="linear-gradient(152deg, #4970E2 15.9%, #343C7E 90.38%)"
        top="67.25rem"
        left="105rem"
      />
      <Character
        src={junyeon}
        alt="Junyeon"
        initialTop="62.8125rem"
        initialLeft="18.875rem"
      />
      <Character
        src={yeojin}
        alt="yeojin"
        initialTop="79.75rem"
        initialLeft="26.6875rem"
      />
      <Character
        src={euna}
        alt="euna"
        initialTop="77.375rem"
        initialLeft="48.125rem"
      />
      <Character
        src={minsol}
        alt="minsol"
        initialTop="89.8125rem"
        initialLeft="65.875rem"
      />
      <Character
        src={myunghyun}
        alt="myunghyun"
        initialTop="60.125rem"
        initialLeft="73.6875rem"
      />
      <Character
        src={taeeun}
        alt="taeeun"
        initialTop="77.375rem"
        initialLeft="93.5rem"
      />
    </S.Wrapper>
  );
}

export default Home;
