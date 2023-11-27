'use client';

import Link from 'next/link';
import { CSSProperties, FC, PropsWithChildren, forwardRef } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = PropsWithChildren<{
  displayName?: string;
  style?: CSSProperties;
  $fontRegular?: boolean;
  $filled?: boolean;
  target?: string;
  href?: string;
}>;

const Button: FC<ButtonProps> = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ children, $fontRegular, href, ...props }, ref) => {
    return (
      <StyledButton ref={ref} href={href || '#'} {...props}>
        <ButtonText $fontRegular={$fontRegular}>{children}</ButtonText>
        <ArrowIcon
          viewBox='0 0 17 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16.1601 1.98273C16.1601 1.35207 15.6437 0.84082 15.0068 0.84082H4.62678C3.98981 0.84082 3.47345 1.35207 3.47345 1.98273C3.47345 2.6134 3.98981 3.12464 4.62678 3.12464H13.8534V12.2599C13.8534 12.8906 14.3698 13.4018 15.0068 13.4018C15.6437 13.4018 16.1601 12.8906 16.1601 12.2599V1.98273ZM2.63107 15.8508L15.8223 2.79019L14.1912 1.17527L1 14.2359L2.63107 15.8508Z'
            style={{
              fill: 'var(--primary-color)',
              stroke: 'var(--primary-color)',
            }}
          />
        </ArrowIcon>
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export { Button };

const ButtonText = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  font-weight: ${({ $fontRegular }) => ($fontRegular ? '600' : '900')};
  font-size: ${({ $fontRegular }) => ($fontRegular ? '1.55rem' : '1.99rem')};
`;

const StyledButton = styled(Link)<ButtonProps>`
  position: relative;
  display: flex;
  align-items: flex-start;
  border: 2px solid var(--primary-color);
  padding: 1.4rem 2.6rem 1.2rem 1.6rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--primary-color);

  ${({ $filled }) =>
    $filled &&
    css`
      border-color: #1c1c1c;
      background-color: #1c1c1c;
      color: var(--primary-color);

      svg path {
        stroke: var(--primary-color) !important;
        fill: var(--primary-color) !important;
      }
    `}
`;

const ArrowIcon = styled.svg`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1rem;
  height: 1rem;
`;

export const ButtonIcon = styled.div`
  margin: -50% 0.8rem -50% -0.8rem;
`;
