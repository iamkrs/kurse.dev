'use client';

import { getSectionPadding } from 'app/utils';
import { setSectionPadding, useDispatch } from 'lib/redux';
import { useEffect } from 'react';
import { useWindowSize } from './useWindowSize';

export const useSectionPadding = () => {
  const dispatch = useDispatch();
  const windowSize = useWindowSize();

  const handleWindowSizeChange = () => {
    const sectionPadding = getSectionPadding(windowSize);
    dispatch(setSectionPadding(sectionPadding));
  };

  useEffect(handleWindowSizeChange, [windowSize]);

  return { windowSize, handleWindowSizeChange };
};
