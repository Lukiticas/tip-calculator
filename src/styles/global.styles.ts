import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle` 
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        transition: all 50ms ease-in;
        transition: color 100ms ease-in;
        transition: background-color 100ms ease-in;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
    margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
    list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
    scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
    text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
    max-width: 100%;
    display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
    font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    }

    :root {
        font-family: ${({ theme }) => theme.font.family};
        font-size: clamp(1rem, 2.7vw, 1.5rem); 
    }

    body {
        background-color: ${({ theme }) => theme.colors.bg600};
    }


    
`;

const Header = styled.header`
  --max-inline: 0.5rem;

  min-block-size: 3rem;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.5rem;
  line-height: 1.6;
  font-size: var(--max-inline);

  color: ${({ theme }) => theme.colors.wrd500};

  & > h1 {
    margin: 0 auto;
    max-inline-size: 8ch;
    word-wrap: break-word;
  }
`;

const AppMain = styled.main`
  background-color: ${({ theme }) => theme.colors.bg400};
  padding: 1rem;
  border-radius: 0.8rem;
`;

const Calculator = styled.div``;

export { GlobalStyle, AppMain, Header, Calculator };
