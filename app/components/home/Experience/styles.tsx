import { Flex, Text } from 'app/components';
import styled, { css } from 'styled-components';
import { DescriptionProps, WrapperProps } from './types';

export const Wrapper = styled(Flex)<WrapperProps>`
  @media screen and (min-width: 771px) {
    ${({ $isLast }) =>
      !$isLast &&
      css`
        margin-bottom: 66px;
      `}
  }
`;

export const DescriptionsGrid = styled(Flex)`
  flex-wrap: wrap;
`;

export const Description = styled(Text)<DescriptionProps>`
  /* font-size: 1.3rem; */
  /* line-height: 2rem; */

  margin-bottom: 1.333rem;

  strong {
    // TODO: medium font weight
    font-weight: 600;
  }
`;

export const InfoWrapper = styled(Flex)`
  margin-bottom: 33px;
`;
