import styled, { css } from 'styled-components';

type SectionProps = {
  $width?: string;
  $paddingRight?: string;
  $primaryColor?: boolean;
};

const StyledSection = styled.section<SectionProps>`
  position: relative;
  padding: 90px 30px 75px 30px;

  @media screen and (min-width: 771px) {
    padding: 130px 190px;
  }

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

      .title svg * {
        fill: #1c1c1c !important;
      }

      .scrollDown * {
        fill: #1c1c1c !important;
      }
    `}

  @media screen and (min-width: 771px) {
    height: 100%;

    ${({ $width }) =>
      $width &&
      css`
        width: ${$width};
      `}

    ${({ $paddingRight }) =>
      $paddingRight &&
      css`
        padding-right: ${$paddingRight};
      `}
  }
`;

const Section = StyledSection;

export { Section };
