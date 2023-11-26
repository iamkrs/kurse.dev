import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.31rem;
  margin-bottom: 2.666rem;
  font-weight: 700;

  @media (max-width: 484px) {
    font-size: 6vw;
  }
`;

const Email: FC<PropsWithChildren> = ({ children }) => (
  <StyledEmail>
    <EmailIcon
      width='32'
      height='23'
      viewBox='0 0 32 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M30.59 1.18005V21.7H1.15002V1.18005H30.59Z'
        style={{ stroke: 'var(--primary-color)' }}
        strokeWidth='2.36'
        strokeMiterlimit='10'
      />
      <path
        d='M1.15002 1.18005L15.85 15.88L30.55 1.18005'
        style={{ stroke: 'var(--primary-color)' }}
        strokeWidth='2.36'
        strokeMiterlimit='10'
      />
      <path
        d='M11.48 11.41L1.15002 21.7'
        style={{ stroke: 'var(--primary-color)' }}
        strokeWidth='2.36'
        strokeMiterlimit='10'
      />
      <path
        d='M30.5901 21.7L20.3 11.41'
        style={{ stroke: 'var(--primary-color)' }}
        strokeWidth='2.36'
        strokeMiterlimit='10'
      />
    </EmailIcon>
    <span>{children}</span>
  </StyledEmail>
);

const EmailIcon = styled.svg`
  margin-right: 10px;
`;

export { Email };
