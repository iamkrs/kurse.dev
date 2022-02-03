import { FC, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { setPreventScroll } from "../../store/slices/app";
import { useAppDispatch } from "../../hooks";

type GalleryItemProps = {
  imageSrc: string | StaticImageData;
  width?: number;
  height?: number;
};

const measurement = {
  width: 217,
  height: 386,
};

const GalleryItem: FC<GalleryItemProps> = ({ children, imageSrc, width, height }) => {
  const dispatch = useAppDispatch();
  const [isZoomed, setZoom] = useState(false);

  return (
    <>
      <ItemWraper
        onClick={() => {
          setZoom(true);
          dispatch(setPreventScroll(true));
        }}
      >
        <ItemImage>
          <Image src={imageSrc} placeholder="blur" alt={children as string} width={width || measurement.width} height={height || measurement.height} />
        </ItemImage>
        {children}
      </ItemWraper>
      <AnimatePresence>
        {isZoomed && (
          <ZoomedImageWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} as={motion.div}>
            <ZoomedImageClose
              onClick={() => {
                setZoom(false);
                dispatch(setPreventScroll(false));
              }}
            >
              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40.8212 4.11128L36.7099 0L20.4106 16.2993L4.11128 0L0 4.11128L16.2993 20.4106L0 36.7099L4.11128 40.8212L20.4106 24.5219L36.7099 40.8212L40.8212 36.7099L24.5219 20.4106L40.8212 4.11128Z"
                  style={{ fill: "var(--primary-color)" }}
                />
              </svg>
            </ZoomedImageClose>
            <ItemWraper>
              <ItemImage>
                <Image src={imageSrc} placeholder="blur" alt={children as string} width={(width || measurement.width) * 2} height={(height || measurement.height) * 2} />
              </ItemImage>
              {children}
            </ItemWraper>
          </ZoomedImageWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryItem;

const ItemWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
  cursor: pointer;
`;

const ItemImage = styled.div`
  margin: 33px 0;
  border: 3px solid var(--primary-color);
  border-radius: 6px;
  padding: 7px 6px;

  @media screen and (min-width: 771px) {
    margin: 33px;
  }
`;

const ZoomedImageWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
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
