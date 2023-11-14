import { FC } from 'react';
import styled from 'styled-components';

type DoubleArrowProps = {
  $primaryColor?: boolean;
  $small?: boolean;
};

const StyledDoubleArrow = styled.svg<DoubleArrowProps>`
  margin-right: 3px;

  ${({ $primaryColor }) =>
    $primaryColor &&
    `
      * { fill: var(--primary-color) }
    `};
`;

export const DoubleArrow: FC<DoubleArrowProps> = ({ ...props }) => {
  return (
    <StyledDoubleArrow
      width={props.$small ? 30 : 37}
      height={props.$small ? 10 : 17}
      viewBox={'0 0 37 17'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M27.79 0L26.39 1.4L32.42 7.45H3.81L9.84 1.4L8.44 0L0 8.44L8.44 16.88L9.84 15.48L3.81 9.43H32.42L26.39 15.48L27.79 16.88L36.23 8.44L27.79 0Z'
        fill='#1C1C1C'
        // strokeWidth={1}
        // stroke={props.$primaryColor ? 'var(--primary-color)' : '#1C1C1C'}
      />
    </StyledDoubleArrow>
  );
};
