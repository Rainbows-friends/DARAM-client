import * as S from "./style";
import { SectionsContainer, Section } from "react-fullpage";
import Header from "@components/Header";
import Circle from "@components/Circle";
import Character from "@components/Character";
import IntroductionBox from "@components/IntroductionBox";
import { circleDataTeam } from "@data/circleDataTeam";
import { circleDataIntroduction } from "@data/circleDataIntroduction";
import { characterDataIntroduction } from "@data/characterDataIntroduction";
import { introductionData } from "@data/introductionData";
import downarrow from "@assets/downarrow.svg";

function Team() {
  let options = {
    anchors: ["top", "mid", "bottom"],
    delay: 1200,
    navigation: true,
    verticalAlign: true,
    fitToSection: true,
  };
  return (
    <S.Wrapper>
      <Header />
      <SectionsContainer {...options} style={{ width: "100vw"}}>
        <Section style={{ width: "100vw"}}>
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
              <S.Text style={{ fontSize: "40px" }} fontSize="40px">
                기숙사 입실 확인, 이제 <S.Green>AI 얼굴 인식</S.Green>으로
                자동화!
              </S.Text>
              <S.Text style={{ fontSize: "32px" }} fontSize="32px">
                <S.Green>DARAM</S.Green>이 기숙사 자치위원회의 업무를
                줄이고,학생들에게 편리한 기숙사 생활을 제공하겠습니다.
              </S.Text>
            </S.TextWrapper>
            <S.DownArrow src={downarrow} alt="" />
          </S.Top>
        </Section>

        <Section style={{ width: "100vw"}}>
          <S.Mid>
            <S.MidTittle>“Who Made This”</S.MidTittle>
            {circleDataIntroduction.map((data, index) => (
              <Circle
                key={index}
                size={data.size}
                color={data.color}
                left={data.left}
                top={data.top}
              />
            ))}
            {characterDataIntroduction.map((data, index) => (
              <Character
                key={index}
                src={data.src}
                alt={data.alt}
                initialTop={data.top}
                initialLeft={data.left}
                width="200px"
                drag={false}
              />
            ))}
            {introductionData.map((data, index) => (
              <IntroductionBox
                key={index}
                name={data.name}
                major={data.major}
                color={data.color}
                top="538px"
                left={data.left}
              />
            ))}
          </S.Mid>
        </Section>

        <Section style={{ width: "100vw"}}>
          <S.Bottom>
            <S.Phrase>
              “The reason why developers like dark mode is because it is their
              future”
              <br />
              -T.E-
            </S.Phrase>
            <S.PhraseWrapper />
          </S.Bottom>
        </Section>
      </SectionsContainer>
    </S.Wrapper>
  );
}

export default Team;
