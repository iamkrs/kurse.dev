import { FC } from "react";
import styled, { css } from "styled-components";

type DotsStripeProps = {
  $width?: string;
  $left?: boolean;
  $right?: boolean;
  $hideOnMobile?: boolean;
};

const StyledDotsStripe = styled.div<DotsStripeProps>`
  position: absolute;
  left: -10px;
  height: 33px;
  top: 0;

  @media screen and (min-width: 771px) {
    left: initial;
    top: 0;
    width: ${({ $width }) => $width || "68px"};
    height: 100%;
  }

  ${({ $left }) =>
    $left &&
    css`
      top: 0;
      @media screen and (min-width: 771px) {
        left: 0;
      }
    `}

  ${({ $right }) =>
    $right &&
    css`
      right: 0;
    `}

  background-image: radial-gradient(var(--primary-color) 20%, transparent 20%);
  background-position: 0 0, 50px 50px;
  background-size: 11px 11px;

  ${({ $hideOnMobile }) =>
    $hideOnMobile &&
    css`
      @media screen and (max-width: 771px) {
        display: none;
      }
    `}
`;

const DotsStripe: FC<DotsStripeProps> = ({ ...props }) => (
  <StyledDotsStripe {...props} className="dotsStripe"></StyledDotsStripe>
);

export { DotsStripe };
