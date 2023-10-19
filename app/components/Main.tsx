"use client";

import { useHorizontalScroll } from "app/hooks";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  @media screen and (min-width: 771px) {
    display: flex;
    flex-flow: column wrap;
    position: relative;
    height: calc(100vh - var(--header-height));
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Main: FC<PropsWithChildren> = ({ children, ...props }) => {
  const scrollRef = useHorizontalScroll();

  return (
    <StyledMain ref={scrollRef} {...props}>
      {children}
    </StyledMain>
  );
};
