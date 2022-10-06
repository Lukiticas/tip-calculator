import { createGlobalStyle, css } from "styled-components";
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

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    :root {
        font-family: ${({ theme }) => theme.font.family};
        font-size: clamp(1.5rem, 2vw, 1.5rem); 

    }

    body {
      background-color: ${({ theme }) => theme.colors.bg600};
    }

    #root {
      min-block-size: 100vh;
      max-inline-size: 100vw;

      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      @media screen and (max-width: 800px) {
        gap: 0rem;
      }
    }
`;

const Header = styled.header`
  max-inline-size: 5rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  column-gap: 0.5rem;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.wrd600};

  & > span:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }

  & > span:nth-of-type(2) {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }

  & > span:nth-of-type(3) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  & > span:nth-of-type(4) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  & > span:nth-of-type(5) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  & > span:nth-of-type(6) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  & > span:nth-of-type(7) {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }

  & > span:nth-of-type(8) {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }

  & > span {
    -webkit-animation: wave-text 1s ease-in-out infinite;
    animation: wave-text 1s ease-in-out infinite;
  }

  @-webkit-keyframes wave-text {
    00% {
      transform: translateY(0em);
    }
    60% {
      transform: translateY(-0.4em);
    }
    100% {
      transform: translateY(0em);
    }
  }

  @keyframes wave-text {
    00% {
      transform: translateY(0em);
    }
    60% {
      transform: translateY(-0.4em);
    }
    100% {
      transform: translateY(0em);
    }
  }

  @media screen and (max-width: 800px) {
    margin-block: 1.2rem;
  }
`;

const AppMain = styled.main`
  inline-size: fit-content;

  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.8rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors.bg400};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  animation: showUp 500ms linear backwards;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @keyframes showUp {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export { GlobalStyle, AppMain, Header };
