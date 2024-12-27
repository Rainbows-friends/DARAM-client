import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  width: 240px;
  height: 75px;
  padding: 8px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  border: 1px solid #FAFAFA;
  border-radius: 16px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`;

export const Name = styled.div`
  color: #FAFAFA;
  font-size: 20px;
  font-weight: 700;
`;

export const Major = styled.div`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 900;
`;