import { Header, Main } from 'app/components';
import { locales } from 'lib/intl';
import { Providers } from 'lib/providers';
import StyledComponentsRegistry from 'lib/registry';
import { NextPage } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import GlobalStyle from '../components/GlobalStyle';

export const metadata = {
  title: 'kurse.dev',
  description: 'Kurse is a full stack developer and designer',
};

export type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

const LocaleLayout: NextPage<LocaleLayoutProps> = ({
  children,
  params: { locale },
}) => {
  const isValidLocale = locales.includes(locale);
  if (!isValidLocale) notFound();

  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <StyledComponentsRegistry>
              <GlobalStyle />
              <Header />
              <Main>{children}</Main>
            </StyledComponentsRegistry>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
