import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 73px;
  background-color: #111214;
  color: white;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  position: relative;
`;

export const Top = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Mid = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  position: absolute;
  width: 1249px;
  top: 330px;
  left: 336px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  color: #fafafa;
  text-align: right;
  font-size: 40px;
  font-weight: 900;
  line-height: 55px;
`;

export const Green = styled.span`
  color: #59ff00;
`;

export const DownArrow = styled.img`
  position: absolute;
  top: 760px;
  left: 936px;
  animation: bounce 1s infinite normal;

  @keyframes bounce {
    0% {
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
    }
  }
`;

export const MidTittle = styled.p`
  width: 310px;
  color: #fafafa;
  text-align: center;
  position: absolute;
  top: 100px;
  left: 805px;
  font-size: 32px;
  font-weight: 900;
`;

export const PhraseWrapper = styled.div`
  width: 1030px;
  height: 172px;
  position: absolute;
  top: 410px;
  left: calc((1920px - 1030px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1030px;
  background: linear-gradient(90deg, #36c752 0%, #36c752 100%);
  filter: blur(350px);
`;

export const Phrase = styled.p`
  width: 828px;
  left: 545px;
  top: 400px;
  color: #fafafa;
  font-size: 24px;
  font-weight: 900;
  position: absolute;
  text-align: end;
  line-height: 35px;
  z-index: 2;
`;
