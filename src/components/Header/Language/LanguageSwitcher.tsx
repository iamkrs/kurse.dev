import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { toggleLanguageSwitcher } from "../../../store/slices/app";
import Item from "../Item";
import BrazilFlag from "./BrazilFlag";
import UsaFlag from "./UsaFlag";

const SelectContext = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0 25px; */
  position: absolute;
  top: var(--header-height);
  right: 0;
  background-color: #1c1c1c;
  height: var(--header-height);
  border-bottom: 2px solid var(--primary-color);
  z-index: 1;
`;

const Language: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { locale } = router;
  const showLanguageSwitcher = useAppSelector((store) => store.app.showLanguageSwitcher);

  return (
    <AnimatePresence>
      {showLanguageSwitcher && (
        <SelectContext initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} as={motion.div}>
          <Item
            borderLeft
            onClick={() => {
              dispatch(toggleLanguageSwitcher());
            }}
          >
            <Link href="/en" locale="en" scroll={false}>
              <a>
                <UsaFlag />
              </a>
            </Link>
          </Item>
          <Item
            borderLeft
            onClick={() => {
              dispatch(toggleLanguageSwitcher());
            }}
          >
            <Link href="/br" locale="br" scroll={false}>
              <a>
                <BrazilFlag />
              </a>
            </Link>
          </Item>
        </SelectContext>
      )}
    </AnimatePresence>
  );
};

export default Language;

export const ActiveLanguage: FC = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <BrazilFlag />
    </>
  );
};
