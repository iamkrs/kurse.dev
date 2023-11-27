import { Flex, SectionProps } from 'app/components';
import { Wrapper as SectionWrapper } from 'app/components/Section/styles';
import styled from 'styled-components';
import { WrapperProps } from './types';

export const Wrapper = styled(Flex)<WrapperProps>`
  @media screen and (min-width: 771px) {
  }
`;

export const ContentWrapper = styled(Flex)`
  @media screen and (min-width: 771px) {
    padding-right: 6000px;
  }
`;

export const Content = styled(Flex)`
  left: 0;
  align-self: flex-start;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 771px) {
    width: calc(100vw - 20rem);
  }
`;

export const StyledSection = styled(SectionWrapper)<SectionProps>`
  @media screen and (min-width: 771px) {
    width: initial;
  }
`;
