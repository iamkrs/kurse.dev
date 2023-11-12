'use client';

import { useHorizontalScroll, useSectionPadding } from 'app/hooks';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  height: 100vh;
  padding-top: var(--header-height);

  @media screen and (min-width: 771px) {
    display: flex;
    flex-flow: column wrap;
    position: relative;
  }
`;

export const Main: FC<PropsWithChildren> = ({ children, ...props }) => {
  useHorizontalScroll();
  useSectionPadding();

  return <StyledMain {...props}>{children}</StyledMain>;
};
