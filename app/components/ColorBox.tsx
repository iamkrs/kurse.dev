import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

type ColorBoxProps = PropsWithChildren<{
  $primaryColor?: boolean;
}>;

const StyledColorBox = styled.div<ColorBoxProps>`
  background-color: #1c1c1c;
  padding: 10px;

  ${({ $primaryColor }) =>
    $primaryColor &&
    `
      background-color: var(--primary-color);
    `};
`;

export const ColorBox: FC<ColorBoxProps> = ({ children, ...props }) => {
  return <StyledColorBox {...props}>{children}</StyledColorBox>;
};
