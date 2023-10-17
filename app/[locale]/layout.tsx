import { Providers } from "lib/providers";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import StyledComponentsRegistry from "lib/registry";
import GlobalStyle from "../components/GlobalStyle";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "lib/intl";

export const metadata = {
  title: "kurse.dev",
  description: "Kurse is a full stack developer and designer",
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
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <StyledComponentsRegistry>
              <GlobalStyle />
              {children}
            </StyledComponentsRegistry>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
