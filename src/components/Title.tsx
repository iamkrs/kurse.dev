import { FC } from "react";
import styled from "styled-components";
import Flex from "./Flex";

const StyledTitle = styled.h1`
  font-weight: 900;
  font-size: 53px;
  margin-bottom: 13px;
`;

const Title: FC = ({ children }) => {
  return (
    <Flex column style={{ marginBottom: 33 }}>
      <StyledTitle>{children}</StyledTitle>
      <svg width="67" height="8" viewBox="0 0 67 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="67" height="8" style={{ fill: "var(--primary-color)" }} />
      </svg>
    </Flex>
  );
};
export default Title;
