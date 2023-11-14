import { Flex } from 'app/components';
import styled from 'styled-components';
import { WrapperProps } from './types';

export const Wrapper = styled(Flex)<WrapperProps>`
  @media screen and (min-width: 771px) {
  }
`;

export const ChildrenWrapper = styled(Flex)`
  @media screen and (min-width: 1800px) {
    max-width: 40vw;
  }
`;

export const ContentWrapper = styled(Flex)`
  @media screen and (min-width: 771px) {
    padding-right: 6000px;
  }
`;