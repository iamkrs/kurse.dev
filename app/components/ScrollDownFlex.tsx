import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Flex, FlexProps } from './Flex';
import { ScrollDown } from './ScrollDown';

export const StyledScrollDownFlex = styled(Flex)`
  @media screen and (min-width: 771px) {
    padding-right: 100px;
  }
`;

export const ScrollDownFlex: FC<PropsWithChildren<FlexProps>> = ({
  children,
  ...props
}) => {
  return (
    <StyledScrollDownFlex {...props}>
      {children}
      <ScrollDown />
    </StyledScrollDownFlex>
  );
};
