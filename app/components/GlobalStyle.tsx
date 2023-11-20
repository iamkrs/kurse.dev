'use client';

import { useSelector } from 'lib/redux';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

type GlobalStyleProps = {
  $primaryColor: string;
  $backgroundColor: string;
  $headerHeight: number;
  $preventScroll: boolean;
};

const StyledGlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${reset}
  
  :root{
    --primary-color: ${({ $primaryColor }) => $primaryColor};
    --background-color: ${({ $backgroundColor }) => $backgroundColor};
    --header-height: ${({ $headerHeight }) => $headerHeight}px;
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    overflow-x: hidden;

    @media screen and (min-width: 771px) {
      overflow-y: hidden;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: var(--primary-color);
    background-color: #1C1C1C;
  }
`;

const GlobalStyle = () => {
  const appState = useSelector((store) => store.app);

  return (
    <StyledGlobalStyle
      $primaryColor={appState.primaryColor}
      $headerHeight={appState.headerHeight}
      $preventScroll={appState.preventScroll}
      $backgroundColor={appState.backgroundColor}
    />
  );
};

export default GlobalStyle;
