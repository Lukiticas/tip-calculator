import { lighten, opacify } from "polished";
import styled from "styled-components";

const RadioWrapper = styled.div``;

const RadioGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  inline-size: 100%;
  margin-top: 1rem;

  input[type="radio"]:checked + label {
    background-color: ${({ theme }) => lighten(0.3, theme.colors.acc900)};
    color: ${({ theme }) => theme.colors.wrd600};
  }

  & > * {
    flex: 1 1 5rem;
  }
`;

const Radiolabel = styled.label`
  block-size: 2rem;

  display: grid;
  place-items: center;

  border-radius: 0.3rem;

  font-weight: 500;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.bg700};
  color: ${({ theme }) => theme.colors.wrd400};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.colors.bg700)};
  }
`;

const RadioItem = styled.input`
  display: none;
`;

const InputRadio = styled.input`
  outline: none;
  border: none;
  border-radius: 0.2rem;
  padding: 0.2rem;
  inline-size: 5rem;

  font-weight: 600;
  text-align: end;

  color: ${({ theme }) => theme.colors.wrd600};
  background-color: ${({ theme }) => theme.colors.bg500};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:placeholder-shown {
    text-align: center;
  }

  &:focus {
    outline: 0.1rem solid ${({ theme }) => theme.colors.acc900};
  }

  &:hover:not(:focus) {
    outline: 0.1rem solid ${({ theme }) => lighten(0.3, theme.colors.acc900)};
  }
`;

export { RadioWrapper, RadioGroup, Radiolabel, RadioItem, InputRadio };
