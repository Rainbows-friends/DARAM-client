import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 73px);
  background-color: #111214;
  color: white;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const Container = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  position: relative;
  top: 2rem;
`;
