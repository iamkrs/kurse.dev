import { CSSProperties, FC, forwardRef } from "react";
import styled from "styled-components";

type ButtonProps = {
  displayName?: string;
  style?: CSSProperties;
  fontRegular?: boolean;
  filled?: boolean;
  target?: string;
};

const Button: FC<ButtonProps> = forwardRef<HTMLAnchorElement, ButtonProps>(({ children, fontRegular, ...props }, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      <ButtonText fontRegular={fontRegular}>{children}</ButtonText>
      <ArrowIcon width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1601 1.98273C16.1601 1.35207 15.6437 0.84082 15.0068 0.84082H4.62678C3.98981 0.84082 3.47345 1.35207 3.47345 1.98273C3.47345 2.6134 3.98981 3.12464 4.62678 3.12464H13.8534V12.2599C13.8534 12.8906 14.3698 13.4018 15.0068 13.4018C15.6437 13.4018 16.1601 12.8906 16.1601 12.2599V1.98273ZM2.63107 15.8508L15.8223 2.79019L14.1912 1.17527L1 14.2359L2.63107 15.8508Z"
          style={{ fill: "var(--primary-color)", stroke: "var(--primary-color)" }}
        />
      </ArrowIcon>
    </StyledButton>
  );
});

Button.displayName = "Button";

export default Button;

const ButtonText = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-weight: ${({ fontRegular }) => (fontRegular ? "600" : "900")};
  font-size: ${({ fontRegular }) => (fontRegular ? "18px" : "23px")}; ;
`;

const StyledButton = styled.a<ButtonProps>`
  position: relative;
  display: flex;
  align-items: flex-start;
  border: 2px solid var(--primary-color);
  padding: 20px calc(26px + 15px) 20px 26px;
  cursor: pointer;
  text-decoration: none;
  color: var(--primary-color);

  ${({ filled }) =>
    filled &&
    `
    border-color: #1C1C1C;
    background-color: #1C1C1C;
    color: var(--primary-color);

    svg path{
      stroke: var(--primary-color) !important;
      fill: var(--primary-color) !important;
    }
  `}
`;

const ArrowIcon = styled.svg`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const ButtonIcon = styled.div`
  margin: -50% 11px -50% -12px;
`;
