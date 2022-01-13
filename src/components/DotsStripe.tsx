import { FC } from "react";
import styled from "styled-components";

type DotsStripeProps = {
  width?: string;
  left?: boolean;
  right?: boolean;
};

const StyledDotsStripe = styled.div<DotsStripeProps>`
  position: absolute;
  top: 0;
  width: ${({ width }) => width || "68px"};
  height: 100%;

  ${({ left }) =>
    left &&
    `
    left: 0;
  `}

  ${({ right }) =>
    right &&
    `
    right: 0;
  `}

  background-image: radial-gradient(var(--primary-color) 20%, transparent 20%);
  background-position: 0 0, 50px 50px;
  background-size: 11px 11px;
`;

const DotsStripe: FC<DotsStripeProps> = ({ ...props }) => {
  return <StyledDotsStripe {...props} className="dotsStripe"></StyledDotsStripe>;
};

export default DotsStripe;
