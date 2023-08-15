import type { NextPage } from "next";
import { i18n, Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import categoryImage from "../../../public/images/selfservicetotem/category.png";
import checkoutImage from "../../../public/images/selfservicetotem/checkout.png";
import productImage from "../../../public/images/selfservicetotem/product.png";
import Button from "../../../src/components/Button";
import CheckOutLink from "../../../src/components/CheckOutLink";
import DotsStripe from "../../../src/components/DotsStripe";
import Flex from "../../../src/components/Flex";
import Header from "../../../src/components/Header/Header";
import Main from "../../../src/components/Main";
import MainTitle from "../../../src/components/MainTitle";
import About from "../../../src/components/Projects/About";
import Credits from "../../../src/components/Projects/Credits";
import GalleryItem from "../../../src/components/Projects/GalleryItem";
import Project from "../../../src/components/Projects/Project";
import ProjectDescription from "../../../src/components/Projects/ProjectDescription";
import CreditsSvg from "../../../src/components/Projects/SelfServiceTotem/CreditsSvg";
import SelfServiceTotemSvg from "../../../src/components/Projects/SelfServiceTotemSvg";
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
      ...(await serverSideTranslations(locale, ["react"])),
    },
  };
}

const SelfServiceTotem: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const scrollRef = useHorizontalScroll();
  const { t } = useTranslation();

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
        <Section width="1145px" paddingRight="270px" primaryColor>
          <Flex column justifyCenter fullHeight>
            <Project noMargin last>
              <SelfServiceTotemSvg />
              <ProjectDescription>
                <MainTitle>{t("react:projectsTotemTitle")}</MainTitle>
                <Text style={{ marginRight: 15, marginBottom: 33 }}>
                  {t("react:projectsTotemDescription")}
                </Text>
                {/* <Button filled>Demo</Button> */}
              </ProjectDescription>
            </Project>
          </Flex>
          <ScrollDown />
          <DotsStripe right hideOnMobile />
        </Section>
        <Section width="1106px">
          <DotsStripe left width="32px" />
          <About>
            <Title style={{ marginBottom: 55 }}>{t("react:projectsAboutTitle")}</Title>
            <Text>
              <Trans i18nKey="react:projectsTotemAboutText">
                O Grupo Risotolândia possui um app de pedidos de alimentos e teve a necessidade de
                instalar pontos de autoatendimento em alguns estabelicimentos que oferecem o
                serviço. <br />
                <br /> O projeto contou com o desenvolvimento da interface e sua usabilidade, e a
                implementação de suas funcionalidades.
              </Trans>
            </Text>
            <Credits>
              <Text small>{t("react:projectsTotemAboutCredits")}</Text>
              <CreditsSvg />
            </Credits>
          </About>
        </Section>
        <Section width="1106px" primaryColor>
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <Title style={{ marginBottom: 55 }}>{t("react:projectsHowWasItDoneTitle")}</Title>
            <Flex style={{ margin: "auto 0" }} columnOnMobile>
              <Text>
                <Trans i18nKey="react:projectsTotemHowWasItDoneText">
                  Foi construido utilizando <strong>React</strong> em <strong>typescript</strong>,
                  com <strong>Redux</strong> para controlar o estado da aplicação. E a estilização
                  dos componentes feita com <strong>emotion</strong>.
                </Trans>
              </Text>
            </Flex>
          </Flex>
          <DotsStripe right />
        </Section>
        <Section width="1406px">
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <Title style={{ marginBottom: 55 }}>{t("react:projectsGalleryTitle")}</Title>
            <Flex style={{ margin: "auto 0" }} columnOnMobile>
              <GalleryItem imageSrc={categoryImage}>
                {t("react:projectsTotemGalleryCategory")}
              </GalleryItem>
              <GalleryItem imageSrc={productImage}>
                {t("react:projectsTotemGalleryProduct")}
              </GalleryItem>
              <GalleryItem imageSrc={checkoutImage} isLast>
                {t("react:projectsTotemGalleryCheckout")}
              </GalleryItem>
            </Flex>
          </Flex>
          <DotsStripe right />
        </Section>
        <Section width="1013px" primaryColor>
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <CheckOutLink href="/projects/react">{t("react:checkOutMoreProjects")}</CheckOutLink>
          </Flex>
        </Section>
      </Main>
    </div>
  );
};

export default SelfServiceTotem;
