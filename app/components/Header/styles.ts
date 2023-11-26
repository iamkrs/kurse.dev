import styled from 'styled-components';
import { HEADER_HEIGHT } from './constants';

export const Wrapper = styled.header`
  display: flex;
  height: ${HEADER_HEIGHT}rem;
  border-bottom: 2px solid var(--primary-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #1c1c1c;
`;
