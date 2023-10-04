import styled from "styled-components";

type TextProps = {
  small?: boolean;
  noWrap?: boolean;
  primaryColor?: boolean;
};

const StyledText = styled.h1<TextProps>`
  font-weight: 400;
  font-size: 29px;
  line-height: 37px;

  ${({ small }) =>
    small &&
    `
      font-size: 18px;
      line-height: 18px;
    `}

  ${({ noWrap }) =>
    noWrap &&
    `
      white-space: nowrap;
    `}

  ${({ primaryColor }) =>
    primaryColor &&
    `
      color: var(--primary-color);
    `};

  strong {
    font-weight: 700;
  }
`;

const Text = StyledText;

export default Text;
