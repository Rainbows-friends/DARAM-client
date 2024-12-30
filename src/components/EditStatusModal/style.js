import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #252525;
  border-radius: 20px;
  position: relative;
`;

export const Top = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Student = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const CancelBtn = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const Mid = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MidItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const InputTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CheckInBtn = styled.button`
  display: flex;
  width: ${(props) => props.width};
  height: 35px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #626262;
  color: #fafafa;
  font-size: 15px;
  font-weight: 400;
  opacity: ${(props) => props.opacity || 1};
`;

export const EditRoomBox = styled.div`
  width: 77px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #626262;
`;

export const EditRoomInput = styled.input`
  width: 100%;
  color: #fafafa;
  font-size: 15px;
  font-weight: 400;
  background: inherit;
  text-align: center;
`;

export const Bot = styled.div`
  padding: 1.5rem;
`;

export const SubmitBtn = styled.button`
  display: flex;
  width: 320px;
  height: 52px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #626262;
  color: #fafafa;
  font-size: 20px;
  font-weight: 600;
  opacity: ${(props) => (props.isModified ? 1 : 0.7)};
  cursor: ${(props) => (props.isModified ? "pointer" : "not-allowed")};
`;
