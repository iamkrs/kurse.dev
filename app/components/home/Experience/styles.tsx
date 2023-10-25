import { Flex, Text } from 'app/components';
import styled, { css } from 'styled-components';
import { DescriptionProps, WrapperProps } from './types';

export const Wrapper = styled(Flex)<WrapperProps>`
  width: 2000px;

  ${({ $isLast }) =>
    !$isLast &&
    css`
      padding-right: 150px;
      margin-right: 150px;
      border-right: 3px solid #1c1c1c;
    `}
`;

export const Description = styled(Text)<DescriptionProps>`
  width: 666px;
  margin: 17px 44px 17px 0;
`;
