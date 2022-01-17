import styled from "styled-components";

type SectionProps = {
  width?: string;
  paddingRight?: string;
  primaryColor?: boolean;
};

const StyledSection = styled.section<SectionProps>`
  position: relative;
  padding: 90px 30px 75px 30px;

  @media screen and (min-width: 771px) {
    padding: 130px 190px;
  }

  ${({ primaryColor }) =>
    primaryColor &&
    `
    background-color: var(--primary-color);
    color: #1C1C1C;

    .dotsStripe{
      background-image: radial-gradient(#1C1C1C 20%, transparent 20%) !important;
    }

    svg *{
      fill: #1C1C1C !important;
    }
  `}

  @media screen and (min-width: 771px) {
    height: 100%;
    ${({ width }) => width && `width: ${width};`}
    ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`}
  }
`;

const Section = StyledSection;

export default Section;
