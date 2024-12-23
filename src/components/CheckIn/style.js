import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 56px 16px 56px 0px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  color: #59ff00;
  font-size: 36px;
  font-weight: 900;
  line-height: 45px;
  font-family: SUIT;
`;

export const Time = styled.p`
  font-size: 64px;
  font-weight: 800;
  line-height: 80px;
  text-align: left;
`;

export const MyStatus = styled.div`
  display: flex;
  width: 27.75rem;
  height: 80px;
  padding: 27px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #252525;
`;

export const RoomNumber = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
`;

export const LoginBtn = styled.button`
  display: flex;
  width: 6.25rem;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #414141;

  &:hover {
    background-color: rgba(65, 65, 65, 0.7);
  }
`;
