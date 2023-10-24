import { FC } from 'react';
import styled from 'styled-components';

const StyledHobbiesTriangles = styled.svg`
  @media screen and (max-width: 771px) {
    margin-bottom: 43px;
  }
`;

export const HobbiesTriangles: FC = () => {
  return (
    <StyledHobbiesTriangles
      style={{ minWidth: 317, marginRight: 77 }}
      width='317'
      height='183'
      viewBox='0 0 317 183'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='3.30642'
        y='91.4775'
        width='124.693'
        height='124.693'
        transform='rotate(-45 3.30642 91.4775)'
        fill='#1C1C1C'
        style={{ stroke: 'var(--primary-color)' }}
        strokeWidth='4.67598'
      />
      <rect
        x='70.3288'
        y='91.4775'
        width='124.693'
        height='124.693'
        transform='rotate(-45 70.3288 91.4775)'
        fill='#1C1C1C'
        style={{ stroke: 'var(--primary-color)' }}
        strokeWidth='4.67598'
      />
      <rect
        x='137.351'
        y='91.4775'
        width='124.693'
        height='124.693'
        transform='rotate(-45 137.351 91.4775)'
        fill='#1C1C1C'
        style={{ stroke: 'var(--primary-color)' }}
        strokeWidth='4.67598'
      />
    </StyledHobbiesTriangles>
  );
};
