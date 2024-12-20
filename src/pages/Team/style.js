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
  height: calc(100vh - 73px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Mid = styled.div`
  width: 100%;
  height: calc(100vh - 73px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bottom = styled.div`
  width: 100%;
  height: calc(100vh - 73px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 320px;
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
  color: #fafafa;
  text-align: center;
  position: absolute;
  top: 120px;
  font-size: 36px;
  font-weight: 900;
`;

export const PhraseWrapper = styled.div`
  width: 1030px;
  height: 172px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1030px;
  background: linear-gradient(90deg, #36c752 0%, #36c752 100%);
  filter: blur(350px);
  `;

export const Phrase = styled.p`
  color: #fafafa;
  font-size: 24px;
  font-weight: 900;
  position: absolute;
  text-align: end;
  line-height: 35px;
  z-index: 2;
`;
