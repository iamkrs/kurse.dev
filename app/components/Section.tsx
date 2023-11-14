import { useMediaQuery } from 'app/hooks';
import { SectionPadding } from 'app/types';
import { useSelector } from 'lib/redux';
import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

const MOBILE_PADDING = '90px 30px 75px 30px';

export type SectionProps = {
  $width?: number;
  $primaryColor?: boolean;
  $padding?: SectionPadding;
  $desktop?: boolean;
};

const StyledSection = styled.section.attrs<SectionProps>(
  ({ $width, $padding, $desktop }) => ({
    style: {
      width: $width ? `${$width}px` : 'initial',
      padding: $desktop ? `${$padding?.y}px ${$padding?.x}px` : MOBILE_PADDING,
    },
  })
)<SectionProps>`
  position: relative;

  ${({ $primaryColor }) =>
    $primaryColor &&
    css`
      background-color: var(--primary-color);
      color: #1c1c1c;

      .dotsStripe {
        background-image: radial-gradient(
          #1c1c1c 20%,
          transparent 20%
        ) !important;
      }

      // Todo: Remove and set passing prop
      .scrollDown * {
        fill: #1c1c1c !important;
      }
    `}

  @media screen and (min-width: 771px) {
    height: 100%;
  }
`;

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  $width,
  ...props
}) => {
  const isDesktop = useMediaQuery('(min-width: 771px)');
  const sectionPadding = useSelector((store) => store.app.sectionPadding);
  const calculatedWidth = isDesktop
    ? $width
      ? $width + sectionPadding.x * 2
      : undefined
    : undefined;

  return (
    <StyledSection
      {...props}
      $padding={sectionPadding}
      $width={calculatedWidth}
      $desktop={isDesktop}
    >
      {children}
    </StyledSection>
  );
};
