import styled from "styled-components";
import { lighten } from "polished";

const ScreenBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 300px) {
    grid-template-columns: 1fr;
    text-align: center;

    & div {
      justify-self: center;
    }

    gap: 0.5rem;
  }
`;

const ScreenDescription = styled.div`
  & > h2 {
    color: ${({ theme }) => theme.colors.wrd400};
    display: block;
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1.2;
  }

  & > span {
    color: ${({ theme }) => theme.colors.wrd500};
    font-size: 0.7rem;
    font-weight: 600;
  }
`;

const ScreenResult = styled.div`
  justify-self: end;

  & > h3 {
    color: ${({ theme }) => theme.colors.acc900};
    font-size: 2.2rem;

    &::before {
      content: "$";
    }

    &:hover {
      color: ${({ theme }) => lighten(0.1, theme.colors.acc900)};
    }
  }
`;

export { ScreenBody, ScreenDescription, ScreenResult };
