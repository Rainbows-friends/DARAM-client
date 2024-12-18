import * as S from "./style";
import Header from "../../components/Header";
import Circle from "../../components/Circle";
import { circleDataTeam } from "../../data/circleDataTeam";
import downarrow from "@assets/downarrow.svg";

function Team() {
  return (
    <S.Wrapper>
      <Header />
      <S.Top>
        {circleDataTeam.map((data, index) => (
          <Circle
            key={index}
            size={data.size}
            color={data.color}
            top={data.top}
            left={data.left}
          />
        ))}
        <S.TextWrapper>
          <S.Text style={{fontSize: "40px"}} fontSize="40px">
            기숙사 입실 확인, 이제 <S.Green>AI 얼굴 인식</S.Green>으로 자동화!
          </S.Text>
          <S.Text style={{fontSize: "32px"}} fontSize="32px">
            <S.Green>DARAM</S.Green>이 기숙사 자치위원회의 업무를 줄이고,학생들에게 편리한 기숙사 생활을 제공하겠습니다.
          </S.Text>
        </S.TextWrapper>
        <img
          src={downarrow}
          alt=""
          style={{ position: "absolute", top: "750px" }}
        />
      </S.Top>
    </S.Wrapper>
  );
}

export default Team;
