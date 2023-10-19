import styled from "styled-components";

type SpacingProps = {
  $horizontal?: boolean;
  $vertical?: boolean;
  $size?: string;
  $mobile?: boolean;
};

const Spacing = styled.div<SpacingProps>`
  ${({ $mobile }) =>
    $mobile && `@media screen and (min-width: 771px) { display: none; }`}
  ${({ $horizontal, $size }) =>
    $horizontal && `width: 100%; height: ${$size || "20px"};`}
  ${({ $vertical, $size }) =>
    $vertical && `height: 100%; width: ${$size || "20px"};`}
`;

export { Spacing };
