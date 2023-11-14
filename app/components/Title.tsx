import { CSSProperties, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type TitleProps = PropsWithChildren<{
  style?: CSSProperties;
  $small?: boolean;
  $medium?: boolean;
  $primaryColor?: boolean;
}>;

// TODO: object with font sizes?
export const HEADING_01_FONT_SIZE = '53px';
export const HEADING_02_FONT_SIZE = '35px';
export const HEADING_03_FONT_SIZE = '28px';

export const Title = styled.h1<TitleProps>`
  --line-height: 8px;
  --line-margin: 20px;

  position: relative;
  font-weight: 900;
  // TODO: better way to handle this?
  font-size: ${({ $small, $medium }) =>
    $small
      ? HEADING_03_FONT_SIZE
      : $medium
      ? HEADING_02_FONT_SIZE
      : HEADING_01_FONT_SIZE};

  ${({ $small, $medium, $primaryColor }) =>
    !$small &&
    !$medium &&
    css`
      padding-bottom: calc(var(--line-height) + var(--line-margin));
      margin-bottom: 55px;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 67px;
        height: var(--line-height);
        background: var(
          ${$primaryColor ? '--background-color' : '--primary-color'}
        );
      }
    `}
`;
