import styled, { css } from 'styled-components';
import { SectionProps } from './Section';

export const Wrapper = styled.section<SectionProps>`
  position: relative;
  padding: 90px 30px 75px 30px;

  ${({ $primaryColor }) =>
    $primaryColor &&
    css`
      background-color: var(--primary-color);
      color: #1c1c1c;

      .dotsStripe {
        background-image: radial-gradient(
          #1c1c1c 20%,
          transparent 20%
        ) !important;
      }

      // Todo: Remove and set passing prop
      .scrollDown * {
        fill: #1c1c1c !important;
      }
    `}

  @media screen and (min-width: 771px) {
    height: 100%;
    padding: 6vw 16vw;
    width: calc(clamp(20rem, 100vw, 120rem) - 137px);
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $autoWidth }) =>
      $autoWidth &&
      css`
        width: auto;
      `}
  }
`;

export const ChildrenWrapper = styled.div<SectionProps>`
  @media screen and (min-width: 1800px) {
    width: 100%;
    max-width: clamp(20rem, 40vw, 52rem);

    ${({ $autoWidth }) =>
      $autoWidth &&
      css`
        max-width: initial;
      `}
  }
`;
