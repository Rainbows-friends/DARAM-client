import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 2.125rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #252525;
  text-decoration: none;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
`;
