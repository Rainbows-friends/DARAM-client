import ArrowIcon from "../../asset/arrow.svg";
import * as S from "./style";

function InfoSection({ text, path }) {
  return (
    <S.Wrapper to={path}>
      <S.Text>{text}</S.Text>
      <img src={ArrowIcon} alt="Arrow Icon" />
    </S.Wrapper>
  );
}

export default InfoSection;
