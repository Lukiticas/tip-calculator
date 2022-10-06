import styled from "styled-components";

const Calculator = styled.div`
  inline-size: 100%;
  padding: 0.8rem;

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export { Calculator };
