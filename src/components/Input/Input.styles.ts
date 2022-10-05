import { lighten } from "polished";
import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 0.3rem;
`;

const Label = styled.label`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.wrd500};
`;

const InputBody = styled.div`
  display: flex;
  align-items: center;
  inline-size: 100%;
  block-size: 2rem;
  border-radius: 0.3rem;

  background-color: ${({ theme }) => theme.colors.bg500};
  color: ${({ theme }) => theme.colors.bg700};

  padding-inline: 0.8rem;
  gap: 0.8rem;

  &:has(:focus) {
    outline: 0.1rem solid ${({ theme }) => theme.colors.acc900};
  }

  &:has(:hover:not(:focus)) {
    outline: 0.1rem solid ${({ theme }) => lighten(0.3, theme.colors.acc900)};
  }

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const InputElement = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: inherit;
  inline-size: 100%;
  block-size: 100%;

  font-weight: 600;
  text-align: end;
`;

const InputIcon = styled.img``;

export { InputBody, InputElement, InputIcon, Label, Wrapper };
