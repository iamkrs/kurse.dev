import type { NextPage } from "next";
import { i18n, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../../src/components/Button";
import CheckOutLink from "../../../src/components/CheckOutLink";
import DotsStripe from "../../../src/components/DotsStripe";
import Flex from "../../../src/components/Flex";
import Header from "../../../src/components/Header/Header";
import Main from "../../../src/components/Main";
import MainTitle from "../../../src/components/MainTitle";
import CustomerLoyaltyAppSvg from "../../../src/components/Projects/CustomerLoyaltyApp/CustomerLoyaltyAppSvg";
import Project from "../../../src/components/Projects/Project";
import ProjectDescription from "../../../src/components/Projects/ProjectDescription";
import ReactNativeLogos from "../../../src/components/Projects/ReactNativeLogos";
import ScrollDown from "../../../src/components/ScrollDown";
import Section from "../../../src/components/Section";
import Text from "../../../src/components/Text";
import Title from "../../../src/components/Title";
import { useAppDispatch } from "../../../src/hooks";
import { useHorizontalScroll } from "../../../src/hooks/useHorizontalScroll";

export async function getStaticProps({ locale }: { locale: string }) {
  if (process.env.NODE_ENV === "development") {
    await i18n?.reloadResources();
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ["reactnative"])),
    },
  };
}

const ReactNative: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const dispatch = useAppDispatch();
  const scrollRef = useHorizontalScroll();
  const { t } = useTranslation();

  // Interval to update translations
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     router.replace(router.asPath, undefined, {
  //       scroll: false,
  //     });
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // });

  return (
    <div>
      <Head>
        <title>Kurse.dev</title>
        <meta name="description" content="Kurse is a full stack developer and designer" />
      </Head>
      <Header />
      <Main ref={scrollRef}>
        <Section width="1100px" paddingRight="270px">
          <Flex column justifyCenter fullHeight>
            <Flex>
              <MainTitle>React Native</MainTitle>
            </Flex>
            <Text style={{ marginBottom: 47, maxWidth: 440 }}>{t("reactnative:description")}</Text>
            <ReactNativeLogos />
          </Flex>
          <ScrollDown />
          <DotsStripe right hideOnMobile />
        </Section>
        <Section width="1240px" primaryColor>
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <Title style={{ marginBottom: 77 }}>{t("reactnative:projectsTitle")}</Title>
            <Flex style={{ margin: "auto 0" }} columnOnMobile>
              <Project last>
                <CustomerLoyaltyAppSvg />
                <ProjectDescription>
                  <Title medium style={{ marginRight: 15, marginBottom: 20, maxWidth: locale === "en" ? 280 : 330 }}>
                    {t("reactnative:projectsCustomerTitle")}
                  </Title>
                  <Text style={{ marginRight: 15, marginBottom: 33 }}>{t("reactnative:projectsCustomerDescription")}</Text>
                  <Link href="/projects/reactnative/customerloyaltyapp" passHref>
                    <Button filled>{t("reactnative:projectsCustomerButton")}</Button>
                  </Link>
                </ProjectDescription>
              </Project>
            </Flex>
          </Flex>
          <DotsStripe right />
        </Section>
        <Section width="1013px">
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <CheckOutLink primaryColor href="/projects/react">
              {t("reactnative:checkOutReactProjects")}
            </CheckOutLink>
          </Flex>
        </Section>
      </Main>
    </div>
  );
};

export default ReactNative;
