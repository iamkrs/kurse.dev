import { AnimatePresence, motion } from 'framer-motion';
import { FC, PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

type TooltipProps = PropsWithChildren<{
  title: string;
}>;

const Tooltip: FC<TooltipProps> = ({ children, title }) => {
  const [isHover, setHover] = useState(false);

  return (
    <Wrapper>
      <Content
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </Content>
      <AnimatePresence>
        {isHover && (
          <Label
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            as={motion.div}
          >
            {title}
          </Label>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export { Tooltip };

const Wrapper = styled.div`
  position: relative;
`;
const Content = styled.div``;

const Label = styled.div`
  position: absolute;
  z-index: 1;
  /* background-color: var(--primary-color); */
  /* color: #1c1c1c; */
  /* border: 2px solid #1c1c1c; */
  background-color: #1c1c1c;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  font-weight: 700;
  font-size: 23px;
  padding: 10px;
  left: 50%;
  transform: translate(-50%, 15px);
`;
