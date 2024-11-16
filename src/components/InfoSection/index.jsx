import ArrowIcon from "../../asset/ArrowIcon";
import * as S from "./style";

function InfoSection({ text }) {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
      <ArrowIcon />
    </S.Wrapper>
  );
}

export default InfoSection;
