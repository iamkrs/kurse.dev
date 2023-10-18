import { FC } from "react";
import styled from "styled-components";

const ScrollDown: FC = () => {
  return (
    <StyledScrollDown
      className="scrollDown"
      width="25"
      height="55"
      viewBox="0 0 25 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1849 0C5.46021 0 0 5.46011 0 12.1849V23.795C0 30.5197 5.46011 35.9799 12.1849 35.9799C18.9097 35.9799 24.3698 30.5198 24.3698 23.795V12.1849C24.3698 5.46021 18.9097 0 12.1849 0ZM20.9213 23.795C20.9213 28.6229 17.0132 32.5315 12.1849 32.5315C7.35702 32.5315 3.44845 28.6233 3.44845 23.795V12.1849C3.44845 7.35702 7.35661 3.44845 12.1849 3.44845C17.0128 3.44845 20.9213 7.35661 20.9213 12.1849V23.795Z"
        style={{ fill: "var(--primary-color)" }}
      />
      <path
        d="M12.1849 7.24194C11.2079 7.24194 10.4605 7.98925 10.4605 8.96632V13.6218C10.4605 14.5988 11.2078 15.3461 12.1849 15.3461C13.162 15.3461 13.9093 14.5988 13.9093 13.6218V8.96632C13.9093 8.04662 13.162 7.24194 12.1849 7.24194Z"
        style={{ fill: "var(--primary-color)" }}
      />
      <path
        d="M15.7484 38.5664L12.185 42.1871L8.62157 38.6237C7.93199 37.9341 6.83992 37.9341 6.15032 38.6237C5.46071 39.3133 5.46073 40.4054 6.15032 41.095L10.9782 45.9228C11.323 46.2676 11.7828 46.44 12.1854 46.44C12.5879 46.44 13.0474 46.2676 13.3926 45.9228L18.2205 41.095C18.91 40.4054 18.91 39.3133 18.2205 38.6237C17.5301 37.9341 16.4384 37.9341 15.7484 38.5664V38.5664Z"
        style={{ fill: "var(--primary-color)" }}
      />
      <path
        d="M15.7484 46.8429L12.185 50.4067L8.62157 46.8429C7.93199 46.1533 6.83992 46.1533 6.15032 46.8429C5.46071 47.5325 5.46073 48.6245 6.15032 49.3141L10.9782 54.142C11.323 54.4868 11.7828 54.6592 12.1854 54.6592C12.5879 54.6592 13.0474 54.4868 13.3926 54.142L18.2205 49.3141C18.91 48.6245 18.91 47.5325 18.2205 46.8429C17.5301 46.1533 16.4384 46.1533 15.7484 46.8429Z"
        style={{ fill: "var(--primary-color)" }}
      />
    </StyledScrollDown>
  );
};

export { ScrollDown };

const StyledScrollDown = styled.svg`
  display: none;
  position: absolute;
  right: 155px;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (min-width: 771px) {
    display: block;
  }
`;