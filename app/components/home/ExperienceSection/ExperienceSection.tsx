import { DotsStripe, Flex, Section, SectionProps } from 'app/components';
import { EXPERIENCE_TITLE_MARGIN_TOP } from 'app/constants';
import { useWindowSize } from 'app/hooks';
import { getSectionPadding } from 'app/utils/getSectionPadding';
import { AnimationScope, motion, useAnimate } from 'framer-motion';
import { clamp, mapRange } from 'lib/maths';
import { useSelector } from 'lib/redux';
import { useScroll } from 'lib/scroll';
import { FC, PropsWithChildren, useRef } from 'react';
import { ChildrenWrapper, ContentWrapper, Wrapper } from './styles';

type WindowSize = {
  height: number;
  width: number;
};

export const ExperienceSection: FC<PropsWithChildren<SectionProps>> = ({
  children,
  ...props
}) => {
  const windowSize = useWindowSize() as WindowSize;
  const [animationRef, animate]: [AnimationScope<HTMLDivElement>, any] =
    useAnimate();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { headerHeight } = useSelector((store) => store.app);
  const isDesktop = windowSize.width > 770;
  const sectionPadding = getSectionPadding();

  useScroll(({ scroll }) => {
    const elementRect = animationRef.current?.getBoundingClientRect();
    const wrapperRect = wrapperRef.current?.getBoundingClientRect();

    if (!elementRect || !wrapperRect) return;

    if (!isDesktop) {
      animate(animationRef.current, { y: 0, x: 0 }, { duration: 0 });
      return;
    }

    const start = scroll + wrapperRect.left;
    const widthDifference = wrapperRect.width - windowSize.width;
    const end = start + widthDifference - sectionPadding.x;

    const getProgressPosition = (progress: number) => {
      const elementWidth = elementRect.width + sectionPadding.x * 2;
      const offset = end + windowSize.width - elementWidth;
      const x = (scroll > offset ? offset : scroll) - start;

      const titleMarginTopPercentage = EXPERIENCE_TITLE_MARGIN_TOP * 0.01;
      const titleMarginTop = windowSize.height * titleMarginTopPercentage;
      const topOffset = titleMarginTop + sectionPadding.y + headerHeight;
      const innerContentHeight =
        windowSize.height - topOffset - sectionPadding.y;
      const maxScrollYpos = -(elementRect.height - innerContentHeight);
      const y = progress * maxScrollYpos;

      return { x, y };
    };

    const getComputedPosition = (progress: number) => {
      const regex = /\(([^)]+)\)/;
      const [currentX, currentY] = (
        regex.exec(animationRef.current.style.transform) || []
      ).map(Number);
      const { x, y } = getProgressPosition(progress);
      if (currentX !== x || currentY !== y) {
      }
      return { x, y, hasUpdatedPosition: currentX !== x || currentY !== y };
    };

    if (scroll < start) {
      const { hasUpdatedPosition, y } = getComputedPosition(0);
      if (hasUpdatedPosition) {
        animate(animationRef.current, { y }, { duration: 0 });
      }
    }

    if (scroll > end) {
      const { hasUpdatedPosition, ...coords } = getComputedPosition(1);
      if (hasUpdatedPosition) {
        animate(animationRef.current, coords, { duration: 0 });
      }
    }

    const canAnimate = scroll > start && scroll < end;
    if (!canAnimate) return;

    let progress = mapRange(start, end, scroll, 0, 1);
    progress = clamp(0, progress, 1);

    console.log({ progress });

    animate(animationRef.current, getProgressPosition(progress), {
      duration: 0,
    });
  });

  return (
    <Wrapper ref={wrapperRef}>
      <Section {...props}>
        <DotsStripe $left $width='32px' />

        <ContentWrapper>
          <Flex
            ref={animationRef}
            as={motion.div}
            style={{
              left: 0,
              alignSelf: 'flex-start',
              width: isDesktop
                ? `calc(100vw - ${sectionPadding.x * 2}px)`
                : '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Flex>
        </ContentWrapper>
        <DotsStripe $right />
      </Section>
    </Wrapper>
  );
};
