import styled, { css } from 'styled-components';

type TextProps = {
  $small?: boolean;
  $medium?: boolean;
  $noWrap?: boolean;
  $primaryColor?: boolean;
};

const StyledText = styled.span<TextProps>`
  font-weight: 400;
  font-size: 29px;
  line-height: 37px;

  ${({ $small }) =>
    $small &&
    css`
      font-size: 14px;
      line-height: 18px;
    `}

  ${({ $medium }) =>
    $medium &&
    css`
      font-size: 26px;
      line-height: 30px;
    `}

  ${({ $noWrap }) =>
    $noWrap &&
    `
      white-space: nowrap;
    `}

  ${({ $primaryColor }) =>
    $primaryColor &&
    `
      color: var(--primary-color);
    `};

  strong {
    font-weight: 700;
  }
`;

export const Text = StyledText;
