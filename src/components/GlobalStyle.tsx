import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useAppSelector } from "../hooks";
import reset from "styled-reset";

type GlobalStyleProps = {
  primaryColor: string;
  headerHeight: string;
};

const StyledGlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${reset}
  
  :root{
    --primary-color: ${(props) => props.primaryColor};
    --header-height: ${(props) => props.headerHeight};
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;

    @media screen and (min-width: 771px) {
      overflow-y: hidden;
      overflow-x: initial;
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
  const appState = useAppSelector((store) => store.app);
  const { primaryColor, headerHeight } = appState;

  useEffect(() => {
    console.log("global style rendered");
  }, []);

  return <StyledGlobalStyle primaryColor={primaryColor} headerHeight={headerHeight} />;
};

export default GlobalStyle;
