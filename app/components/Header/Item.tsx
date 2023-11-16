import { CSSProperties, FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type ItemProps = PropsWithChildren<{
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: CSSProperties;
  $borderLeft?: boolean;
  $chevronDown?: boolean;
  $last?: boolean;
}>;

const StyledItem = styled.div<ItemProps>`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $chevronDown }) => ($chevronDown ? '137px' : '137px')};
  ${({ $borderLeft }) =>
    $borderLeft
      ? css`
          border-left: 2px solid var(--primary-color);
        `
      : css`
          border-right: 2px solid var(--primary-color);
        `}
  cursor: pointer;

  ${({ $last }) =>
    $last &&
    css`
      margin-left: auto !important;

      @media screen and (max-width: 771px) {
        border-left: none !important;
      }
    `}

  a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Item: FC<ItemProps> = ({ children, ...props }) => {
  return (
    <StyledItem {...props}>
      {children}
      {props.$chevronDown && (
        <ChevronDown
          width='13'
          height='9'
          viewBox='0 0 17 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.3248 1.57903L8.3353 5.56899L4.3458 1.57903C3.57376 0.806989 2.35111 0.806989 1.57904 1.57903C0.806974 2.35108 0.806997 3.57373 1.57904 4.3458L6.98421 9.75097C7.37024 10.137 7.88507 10.33 8.33576 10.33C8.78646 10.33 9.30081 10.137 9.68731 9.75097L15.0925 4.3458C15.8645 3.57375 15.8645 2.3511 15.0925 1.57903C14.3195 0.806989 13.0973 0.806989 12.3248 1.57903Z'
            style={{ fill: 'var(--primary-color)' }}
            stroke='#1C1C1C'
            strokeWidth={1}
          />
        </ChevronDown>
      )}
    </StyledItem>
  );
};

export default Item;

const ChevronDown = styled.svg`
  margin-left: 7px;
`;
