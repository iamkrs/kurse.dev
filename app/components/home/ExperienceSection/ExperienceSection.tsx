import { DotsStripe, Section, SectionProps } from 'app/components';
import { useWindowSize } from 'app/hooks';
import { getSectionPadding } from 'app/utils/getSectionPadding';
import { motion, useAnimate } from 'framer-motion';
import { clamp, mapRange } from 'lib/maths';
import { useSelector } from 'lib/redux';
import { useScroll } from 'lib/scroll';
import { FC, PropsWithChildren, useRef } from 'react';
import { ANIMATION_DURATION } from './constants';
import { ChildrenWrapper, Content, ContentWrapper, Wrapper } from './styles';
import { getCurrentPos, getProgressPos, getThreshold } from './utils';

type WindowSize = {
  height: number;
  width: number;
};

export const ExperienceSection: FC<PropsWithChildren<SectionProps>> = ({
  children,
  ...props
}) => {
  const windowSize = useWindowSize() as WindowSize;
  const [animationRef, animate] = useAnimate<HTMLDivElement>();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { headerHeight } = useSelector((store) => store.app);
  const isDesktop = windowSize.width > 770;
  const sectionPadding = getSectionPadding();

  useScroll(({ scroll }) => {
    console.log({ scroll });

    const elementRect = animationRef.current?.getBoundingClientRect();
    const wrapperRect = wrapperRef.current?.getBoundingClientRect();

    if (!elementRect || !wrapperRect) return;

    if (!isDesktop) {
      const { scrolled } = getCurrentPos({ animationRef });
      if (scrolled) {
        animate(animationRef.current, { y: 0, x: 0 }, ANIMATION_DURATION);
      }
      return;
    }

    const getParams = (progress?: number) => ({
      progress,
      elementRect,
      sectionPadding,
      scroll,
      windowSize,
      headerHeight,
      wrapperRect,
      animationRef,
    });

    const { start, end } = getThreshold(getParams());

    if (scroll < start) {
      const { updated, y } = getProgressPos(getParams(0));
      if (updated) {
        animate(animationRef.current, { y }, ANIMATION_DURATION);
      }
    }

    if (scroll > end) {
      const { updated, x, y } = getProgressPos(getParams(1));
      if (updated) {
        animate(animationRef.current, { x, y }, ANIMATION_DURATION);
      }
    }

    const canAnimate = scroll > start && scroll < end;
    if (!canAnimate) return;

    const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1);
    const { x, y } = getProgressPos(getParams(progress));

    animate(animationRef.current, { x, y }, ANIMATION_DURATION);
  });

  return (
    <Wrapper ref={wrapperRef}>
      <Section {...props}>
        <DotsStripe $left $width='32px' />

        <ContentWrapper>
          <Content ref={animationRef} as={motion.div}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Content>
        </ContentWrapper>
        <DotsStripe $right />
      </Section>
    </Wrapper>
  );
};
