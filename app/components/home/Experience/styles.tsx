import { Flex, Text } from 'app/components';
import styled, { css } from 'styled-components';
import { DescriptionProps, WrapperProps } from './types';

export const Wrapper = styled(Flex)<WrapperProps>`
  @media screen and (min-width: 771px) {
    ${({ $isLast }) =>
      !$isLast &&
      css`
        margin-bottom: 4.13rem;
      `}
  }
`;

export const DescriptionsGrid = styled(Flex)`
  flex-wrap: wrap;
`;

export const Description = styled(Text)<DescriptionProps>`
  margin-bottom: 1.333rem;

  strong {
    font-weight: 600;
  }
`;

export const InfoWrapper = styled(Flex)`
  margin-bottom: 2rem;
`;
