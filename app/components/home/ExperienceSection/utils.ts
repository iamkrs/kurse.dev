import { EXPERIENCE_TITLE_MARGIN_TOP } from 'app/constants';

export const getThreshold = ({
  scroll,
  wrapperRect,
  windowSize,
  sectionPadding,
}: any) => {
  const start = scroll + wrapperRect.left;
  const widthDifference = wrapperRect.width - windowSize.width;
  const end = start + widthDifference - sectionPadding.x;

  return { start, end };
};

export const getProgressPos = ({
  progress,
  elementRect,
  sectionPadding,
  scroll,
  windowSize,
  headerHeight,
  wrapperRect,
  animationRef,
}: any) => {
  const { x: currentX, y: currentY } = getCurrentPos({ animationRef });

  const { start, end } = getThreshold({
    scroll,
    wrapperRect,
    windowSize,
    sectionPadding,
  });

  const elementWidth = elementRect.width + sectionPadding.x * 2;
  const offset = end + windowSize.width - elementWidth;
  const x = (scroll > offset ? offset : scroll) - start;

  const titleMarginTopPercentage = EXPERIENCE_TITLE_MARGIN_TOP * 0.01;
  const titleMarginTop = windowSize.height * titleMarginTopPercentage;
  const topOffset = titleMarginTop + sectionPadding.y + headerHeight;
  const innerContentHeight = windowSize.height - topOffset - sectionPadding.y;
  const maxScrollYpos = -(elementRect.height - innerContentHeight);
  const y = progress * maxScrollYpos;

  const updated = currentX !== x || currentY !== y;

  return { x, y, updated };
};

export const getCurrentPos = ({ animationRef }: any) => {
  const regex = /\(([^)]+)\)/;
  const [x, y] = (regex.exec(animationRef.current.style.transform) || []).map(
    Number
  );
  const scrolled = x !== 0 || y !== 0;

  return { x, y, scrolled };
};
