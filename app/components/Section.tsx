'use client';

import styled, { css } from 'styled-components';

export type SectionProps = {
  $primaryColor?: boolean;
};

export const Section = styled.section<SectionProps>`
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
  }
`;
