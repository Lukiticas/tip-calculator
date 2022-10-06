import styled from "styled-components";
import { lighten } from "polished";

const ScreenBody = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
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
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.wrd400};
    font-weight: 600;
    font-size: 0.8em;
    line-height: 1.2;
  }

  & > span {
    color: ${({ theme }) => theme.colors.wrd500};
    font-size: 0.7em;
    font-weight: 600;
  }
`;

const ScreenResult = styled.div`
  justify-self: end;

  @media screen and (max-width: 800px) {
    font-size: 0.7em;
  }

  & > h3 {
    max-inline-size: 100%;
    font-size: 2.2em;

    overflow-wrap: break-word;
    word-break: break-all;
    text-align: end;

    color: ${({ theme }) => theme.colors.acc900};

    &::before {
      content: "$";
    }

    &:hover {
      color: ${({ theme }) => lighten(0.1, theme.colors.acc900)};
    }
  }
`;

export { ScreenBody, ScreenDescription, ScreenResult };
