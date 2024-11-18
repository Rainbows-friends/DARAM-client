import ArrowIcon from "../../asset/ArrowIcon.svg";
import * as S from "./style";

function InfoSection({ text }) {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
      <img src={ArrowIcon} alt="Arrow Icon" />
    </S.Wrapper>
  );
}

export default InfoSection;
