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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  color: #FAFAFA;
  text-align: right;
  font-family: SUIT;
  font-size: 40px;
  font-style: normal;
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
    0% {}
    50%{
      transform: translateY(-15px);
    }
    100%{}
  }
`;