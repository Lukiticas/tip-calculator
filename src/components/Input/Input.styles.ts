import { lighten } from "polished";
import styled from "styled-components";

interface invalidProps {
  isInvalid?: boolean;
}

const Wrapper = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 0.3rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.wrd500};
`;

const InputBody = styled.div<invalidProps>`
  --wrd-color: ${({ theme, isInvalid }) =>
    isInvalid ? "red" : theme.colors.bg500};
  --invalid-color: ${({ theme, isInvalid }) =>
    isInvalid ? "red" : theme.colors.acc900};

  display: flex;
  align-items: center;
  gap: 0.8rem;

  inline-size: 100%;
  block-size: 2rem;

  padding-inline: 0.8rem;
  border-radius: 0.3rem;

  background-color: ${({ theme }) => theme.colors.bg500};
  color: ${({ theme }) => theme.colors.wrd700};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  outline: ${({ isInvalid }) =>
    isInvalid ? "0.1rem solid var(--invalid-color)" : "none"};

  &:has(:hover:not(:focus)) {
    outline: 0.1rem solid
      ${({ theme, isInvalid }) =>
        lighten(0.3, isInvalid ? "red" : theme.colors.acc900)};
  }

  &:has(:focus) {
    outline: 0.1rem solid var(--invalid-color);
  }
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

const InvalidSpan = styled.span`
  color: red;
`;

export { InvalidSpan, InputBody, InputElement, InputIcon, Label, Wrapper };
