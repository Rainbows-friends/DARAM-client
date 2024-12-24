import styled from "styled-components";

export const Wrapper = styled.div`
  width: 42.5rem;
  height: 22.5rem;
  border-radius: 12px;
  background: #252525;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

export const Floor = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 30px;
`;

export const SearchBox = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #3a3a3a;
  background: #252525;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  color: #c8c1b9;
  background-color: inherit;

  &::placeholder {
    color: inherit;
    font: inherit;
  }
`;

export const MemberBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
  }
`;

export const Shadow = styled.div`
  width: 39.5rem;
  height: 111px;
  position: absolute;
  bottom: 0px;
  background: linear-gradient(180deg, rgba(37, 37, 37, 0) 0%, #252525 100%);
`;

export const Text = styled.p`
  font-size: 20px;
`;
