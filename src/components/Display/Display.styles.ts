import styled from "styled-components";
import { lighten, darken } from "polished";

const DisplayBody = styled.div`
  padding: 1.5rem;
  border-radius: 0.4rem;
  max-inline-size: 20rem;

  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  background-color: ${({ theme }) => theme.colors.bg700};
`;

const DisplayButton = styled.button`
  outline: none;

  border: none;
  border-radius: 0.2rem;

  min-inline-size: 100%;
  padding: 0.4rem 1rem;

  background-color: ${({ theme }) => theme.colors.acc900};

  font-size: 1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.bg700};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => lighten(0.3, theme.colors.acc900)};
  }

  &:active {
    background-color: ${({ theme }) => darken(0.1, theme.colors.acc900)};
  }
`;

export { DisplayBody, DisplayButton };
