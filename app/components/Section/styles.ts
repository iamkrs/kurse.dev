import styled, { css } from 'styled-components';
import { SectionProps } from './Section';

export const Wrapper = styled.section<SectionProps>`
  position: relative;
  padding: 5.625rem 1.875rem 4.6875rem 1.875rem;

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
    padding: 10rem;
    min-width: calc(88rem);
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
  @media screen and (min-width: 771px) {
    width: 100%;
    max-width: clamp(69rem, 40vw, 69rem);

    ${({ $autoWidth }) =>
      $autoWidth &&
      css`
        max-width: initial;
      `}
  }
`;
