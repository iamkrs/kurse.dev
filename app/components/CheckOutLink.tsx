import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type CheckOutLinkProps = PropsWithChildren<{
  href: string;
  $primaryColor?: boolean;
}>;

const StyledLink = styled(Link)<{ $primaryColor?: boolean }>`
  font-size: 2rem;
  text-decoration: none;
  color: #1c1c1c;
  font-weight: 700;

  ${({ $primaryColor }) =>
    $primaryColor &&
    css`
      color: var(--primary-color);

      svg path {
        fill: var(--primary-color);
      }
    `}

  @media screen and (max-width: 771px) {
    max-width: 20.333rem;
  }
`;

const CheckOutLink: FC<CheckOutLinkProps> = ({ children, href, ...props }) => {
  return (
    <StyledLink href={href} {...props}>
      {children}
      <svg
        style={{ marginLeft: 12, transform: 'translateY(3px)' }}
        width='44'
        height='24'
        viewBox='0 0 44 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M43.0607 13.0607C43.6464 12.4749 43.6464 11.5251 43.0607 10.9393L33.5147 1.3934C32.9289 0.807611 31.9792 0.807611 31.3934 1.3934C30.8076 1.97919 30.8076 2.92893 31.3934 3.51472L39.8787 12L31.3934 20.4853C30.8076 21.0711 30.8076 22.0208 31.3934 22.6066C31.9792 23.1924 32.9289 23.1924 33.5147 22.6066L43.0607 13.0607ZM0 13.5H42V10.5H0V13.5Z'
          fill='#1C1C1C'
        />
      </svg>
    </StyledLink>
  );
};

export { CheckOutLink };
