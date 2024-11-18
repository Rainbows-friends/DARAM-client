import styled from "styled-components";

export const Circle = styled.div`
  width: ${(props) => props.size || "100px"};
  height: ${(props) => props.size || "100px"};
  background: ${(props) => props.color || "none"};
  border-radius: 50%;
  opacity: 0.95;
  filter: blur(10px);
  box-shadow: 8px 5px 20px 0px rgba(0, 0, 0, 0.25) inset;
  position: absolute;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
`;
