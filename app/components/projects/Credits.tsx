import styled from 'styled-components';

export const Credits = styled.div`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 3.125rem;

  svg {
    margin-top: 0.625rem;
  }

  @media screen and (min-width: 771px) {
    display: flex;
    align-items: center;
    letter-spacing: 0.0625rem;
    margin-left: auto;
    flex-direction: row;

    svg {
      margin-left: 0.9375rem;
      margin-top: initial;
    }
  }
`;
