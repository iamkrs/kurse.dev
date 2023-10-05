import { motion, AnimatePresence } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { Router, useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { toggleLanguageSwitcher } from "../../../store/slices/app";
import Item from "../Item";
import { useTranslation } from "next-i18next";
import { UsaFlag } from "./UsaFlag";
import { BrazilFlag } from "./BrazilFlag";

const SelectContext = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: var(--header-height);
  right: 0;
  background-color: #1c1c1c;
  height: var(--header-height);
  border-bottom: 2px solid var(--primary-color);
  z-index: 1;
`;

const LanguageSwitcher: FC = () => {
  const dispatch = useAppDispatch();
  const { locale, asPath, push } = useRouter();
  const { i18n } = useTranslation();

  const showLanguageSwitcher = useAppSelector(
    // TODO: Need selectors?
    (store) => store.app.showLanguageSwitcher
  );

  const handleChangeLanguage = (language: string) => (event: any) => {
    event.preventDefault();
    push(asPath, undefined, { shallow: true, locale: language });
    i18n.changeLanguage(language);
  };

  return (
    <AnimatePresence>
      {showLanguageSwitcher && (
        <SelectContext
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          as={motion.div}
        >
          <Item
            borderLeft
            onClick={() => {
              dispatch(toggleLanguageSwitcher());
            }}
          >
            <Link href={asPath} locale="en" shallow={false}>
              <UsaFlag />
            </Link>
          </Item>
          <Item
            borderLeft
            onClick={() => {
              dispatch(toggleLanguageSwitcher());
            }}
          >
            <Link href={asPath} locale="br" shallow={false}>
              <BrazilFlag />
            </Link>
          </Item>
        </SelectContext>
      )}
    </AnimatePresence>
  );
};

export default LanguageSwitcher;

export const ActiveLanguage: FC = () => {
  const { locale } = useRouter();

  return (
    <>
      {locale === "en" && <UsaFlag />}
      {locale === "br" && <BrazilFlag />}
    </>
  );
};
