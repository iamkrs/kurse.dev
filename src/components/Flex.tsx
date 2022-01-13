import styled from "styled-components";

type FlexProps = {
  column?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  fullHeight?: boolean;
};

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  position: relative;
  align-items: flex-start;
  ${({ column }) => column && `flex-direction: column;`}
  ${({ alignCenter }) => alignCenter && `align-items: center;`}
  ${({ justifyCenter }) => justifyCenter && `justify-content: center;`}
  ${({ fullHeight }) => fullHeight && `height: 100%;`}
`;

const Flex = StyledFlex;

export default Flex;
