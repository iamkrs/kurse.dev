import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-flow: column wrap;
  position: relative;
  height: calc(100vh - var(--header-height));
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Main = StyledMain;

export default Main;
