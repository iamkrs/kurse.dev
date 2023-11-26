import styled, { css } from 'styled-components';
import { HEADER_HEIGHT, HEADER_PADDING } from '../constants';
import { ItemProps } from './Item';

export const Wrapper = styled.div<ItemProps>`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // TODO: Need chevronDown prop?
  width: ${HEADER_HEIGHT}rem;
  padding: ${HEADER_PADDING}rem;

  ${({ $borderLeft }) =>
    $borderLeft
      ? css`
          border-left: 2px solid var(--primary-color);
        `
      : css`
          border-right: 2px solid var(--primary-color);
        `}
  cursor: pointer;

  ${({ $last }) =>
    $last &&
    css`
      margin-left: auto !important;

      @media screen and (max-width: 771px) {
        border-left: none !important;
      }
    `}

  a {
    height: calc(${HEADER_HEIGHT}rem - ${HEADER_PADDING * 2}rem);

    svg {
      height: 100%;
      width: 100%;
    }
  }
`;
