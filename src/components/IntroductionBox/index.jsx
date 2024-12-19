import * as S from "./style";

function IntroductionBox({ name, major, color, top, left }) {
  return(
    <S.Box top={top} left={left}>
      <S.Name>{name}</S.Name>
      <S.Major color={color} >{major}</S.Major>
    </S.Box>
  );
}

export default IntroductionBox;