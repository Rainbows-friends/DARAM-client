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
  padding: 2rem 3rem 2.5rem;
  background-color: #252525;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 20px;
  position: relative;
`;

export const Text = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: white;
`;

export const Btn = styled.button`
  width: 100%;
  height: auto;
  padding: 1rem 2rem 1rem 1.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem;
  color: #374151;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

export const GoogleBtn = styled(Btn)`
  background-color: white;
`;

export const Img = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;
