import { AnimatePresence, motion } from 'framer-motion';
import { toggleLanguageSwitcher, useDispatch, useSelector } from 'lib/redux';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
import styled from 'styled-components';
import Item from '../Item';
import { BrazilFlag } from './BrazilFlag';
import { UsaFlag } from './UsaFlag';

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

export const LanguageSwitcher: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  // regex to remove locale const from pathname
  const formattedPathname = pathname?.replace(/^\/(br|en)/, '/');

  const showLanguageSwitcher = useSelector(
    // TODO: Need selectors?
    (store) => store.app.showLanguageSwitcher
  );

  const handleChangeLanguage = (language: string) => (event: any) => {
    event.preventDefault();

    dispatch(toggleLanguageSwitcher());
    router.push(`/${language}${formattedPathname}`);
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
          <Item $borderLeft onClick={handleChangeLanguage('en')}>
            <UsaFlag />
          </Item>
          <Item $borderLeft onClick={handleChangeLanguage('br')}>
            <BrazilFlag />
          </Item>
        </SelectContext>
      )}
    </AnimatePresence>
  );
};

export const ActiveLanguage: FC = () => {
  const locale = useLocale();

  return (
    <>
      {locale === 'en' && <UsaFlag />}
      {locale === 'br' && <BrazilFlag />}
    </>
  );
};
