import { CSSProperties, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type TitleProps = PropsWithChildren<{
  style?: CSSProperties;
  $small?: boolean;
  $medium?: boolean;
  $primaryColor?: boolean;
}>;

// TODO: better way to handle this?
export const HEADING_01_FONT_SIZE = '3.3125rem';
export const HEADING_02_FONT_SIZE = '2.1875rem';
export const HEADING_03_FONT_SIZE = '1.75rem';

export const Title = styled.h1<TitleProps>`
  --line-height: 0.5rem;
  --line-margin: 1.25rem;

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
      margin-bottom: 3.44rem;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 4.2rem;
        height: var(--line-height);
        background: var(
          ${$primaryColor ? '--background-color' : '--primary-color'}
        );
      }
    `}
`;
