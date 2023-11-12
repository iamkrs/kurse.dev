import { Flex, Text } from 'app/components';
import styled, { css } from 'styled-components';
import { DescriptionProps, WrapperProps } from './types';

export const Wrapper = styled(Flex)<WrapperProps>`
  @media screen and (min-width: 771px) {
    ${({ $isLast }) =>
      !$isLast &&
      css`
        /* TODO: Remove? */
        /* margin-right: 150px; */
        /* border-right: 1px solid #1c1c1c; */
      `}
  }
`;

export const DescriptionsGrid = styled(Flex)`
  flex-wrap: wrap;
`;

export const Description = styled(Text)<DescriptionProps>`
  padding: 17px 44px 17px 0;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const InfoWrapper = styled(Flex)`
  @media screen and (min-width: 771px) {
    margin-right: 99px;
  }
`;
