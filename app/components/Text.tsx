import styled, { css } from 'styled-components';

type TextProps = {
  $small?: boolean;
  $medium?: boolean;
  $noWrap?: boolean;
  $primaryColor?: boolean;
};

const StyledText = styled.span<TextProps>`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.6rem;

  ${({ $small }) =>
    $small &&
    css`
      font-size: 0.875rem;
      line-height: 1.125rem;
    `}

  ${({ $medium }) =>
    $medium &&
    css`
      font-size: 1.625rem;
      line-height: 1.875rem;
    `}

  ${({ $noWrap }) =>
    $noWrap &&
    css`
      white-space: nowrap;
    `}

  ${({ $primaryColor }) =>
    $primaryColor &&
    css`
      color: var(--primary-color);
    `};

  strong {
    font-weight: 700;
  }
`;

export const Text = StyledText;
