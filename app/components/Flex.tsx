import styled from 'styled-components';

export type FlexProps = {
  $column?: boolean;
  $columnOnMobile?: boolean;
  $hideOnMobile?: boolean;
  $alignCenter?: boolean;
  $justifyCenter?: boolean;
  $fullHeight?: boolean;
  $flexWrap?: boolean;
};

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  position: relative;
  align-items: flex-start;
  ${({ $column }) => $column && `flex-direction: column;`}
  ${({ $columnOnMobile }) =>
    $columnOnMobile &&
    `@media screen and (max-width: 771px) { flex-direction: column; }`}
  ${({ $hideOnMobile }) =>
    $hideOnMobile && `@media screen and (max-width: 771px) { display: none; }`}
  ${({ $alignCenter }) => $alignCenter && `align-items: center;`}
  ${({ $justifyCenter }) => $justifyCenter && `justify-content: center;`}
  ${({ $fullHeight }) => $fullHeight && `height: 100%;`}
  ${({ $flexWrap }) => $flexWrap && `flex-wrap: wrap;`}
`;

const Flex = StyledFlex;

export { Flex };
