'use client';

import { FC, PropsWithChildren } from 'react';
import { ChildrenWrapper, Wrapper } from './styles';

export type SectionProps = {
  $primaryColor?: boolean;
};

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};
