import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'lib/redux';
import Image, { StaticImageData } from 'next/image';
import { FC, PropsWithChildren, useState } from 'react';
import styled, { css } from 'styled-components';
import { setPreventScroll } from '../../../lib/redux/slices/appSlice/appSlice';

type GalleryItemProps = PropsWithChildren<{
  imageSrc: string | StaticImageData;
  width?: number;
  height?: number;
  $isLast?: boolean;
}>;

const measurement = {
  width: 217,
  height: 386,
};

export const GalleryItem: FC<GalleryItemProps> = ({
  children,
  imageSrc,
  width,
  height,
  $isLast,
}) => {
  const dispatch = useDispatch();
  const [isZoomed, setZoom] = useState(false);

  return (
    <>
      <ItemWraper
        onClick={() => {
          setZoom(true);
          dispatch(setPreventScroll(true));
        }}
        $isLast={$isLast}
      >
        <ItemImage>
          <Image
            src={imageSrc}
            alt={children as string}
            width={width || measurement.width}
            height={height || measurement.height}
          />
        </ItemImage>
        {children}
      </ItemWraper>
      <AnimatePresence>
        {isZoomed && (
          <ZoomedImageWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            as={motion.div}
          >
            <ZoomedImageClose
              onClick={() => {
                setZoom(false);
                dispatch(setPreventScroll(false));
              }}
            >
              <svg
                width='41'
                height='41'
                viewBox='0 0 41 41'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M40.8212 4.11128L36.7099 0L20.4106 16.2993L4.11128 0L0 4.11128L16.2993 20.4106L0 36.7099L4.11128 40.8212L20.4106 24.5219L36.7099 40.8212L40.8212 36.7099L24.5219 20.4106L40.8212 4.11128Z'
                  style={{ fill: 'var(--primary-color)' }}
                />
              </svg>
            </ZoomedImageClose>
            <ItemWraper>
              <ItemImage>
                <Image
                  src={imageSrc}
                  alt={children as string}
                  width={(width || measurement.width) * 2}
                  height={(height || measurement.height) * 2}
                />
              </ItemImage>
              {children}
            </ItemWraper>
          </ZoomedImageWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

type ItemWrapperProps = {
  $isLast?: boolean;
};

const ItemWraper = styled.div<ItemWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  ${({ $isLast }) =>
    !$isLast &&
    css`
      margin-bottom: 44px;
    `}

  @media screen and (min-width: 771px) {
    margin-right: 66px;
  }
`;

const ItemImage = styled.div`
  border: 3px solid var(--primary-color);
  border-radius: 6px;
  padding: 7px 6px;
  margin-bottom: 12px;
`;

const ZoomedImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;

  background-color: #1c1c1c;

  > div:nth-child(2) {
    cursor: initial;
    margin: 40px;
  }
`;

const ZoomedImageClose = styled.div`
  position: absolute;
  top: 35px;
  right: 35px;
  cursor: pointer;
`;
