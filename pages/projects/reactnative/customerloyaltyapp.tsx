import type { NextPage } from "next";
import { i18n, Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import creategiftcardImage from "../../../public/images/customerloyaltyapp/creategiftcard.png";
import mypointsImage from "../../../public/images/customerloyaltyapp/mypoints.png";
import orderImage from "../../../public/images/customerloyaltyapp/order.png";
import CheckOutLink from "../../../src/components/CheckOutLink";
import DotsStripe from "../../../src/components/DotsStripe";
import Flex from "../../../src/components/Flex";
import Header from "../../../src/components/Header/Header";
import Main from "../../../src/components/Main";
import MainTitle from "../../../src/components/MainTitle";
import About from "../../../src/components/Projects/About";
import Credits from "../../../src/components/Projects/Credits";
import CreditsSvg from "../../../src/components/Projects/CustomerLoyaltyApp/CreditsSvg";
import CustomerLoyaltyAppSvg from "../../../src/components/Projects/CustomerLoyaltyApp/CustomerLoyaltyAppSvg";
import GalleryItem from "../../../src/components/Projects/GalleryItem";
import Project from "../../../src/components/Projects/Project";
import ProjectDescription from "../../../src/components/Projects/ProjectDescription";
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

const galleryDimensions = {
  width: 180,
  height: 386,
};

const SelfServiceTotem: NextPage = () => {
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
        <Section width={`${locale === "en" ? 1145 : 1300}px`} paddingRight="270px" primaryColor>
          <Flex column justifyCenter fullHeight>
            <Project noMargin last>
              <CustomerLoyaltyAppSvg />
              <ProjectDescription>
                <MainTitle>{t("reactnative:projectsCustomerTitle")}</MainTitle>
                <Text style={{ marginRight: 15, marginBottom: 33 }}>
                  {t("reactnative:projectsCustomerDescription")}
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
            <Title style={{ marginBottom: 55 }}>{t("reactnative:projectsAboutTitle")}</Title>
            <Text>{t("reactnative:projectsCustomerAboutText")}</Text>
            <Credits>
              <Text small>{t("reactnative:projectsCustomerAboutCredits")}</Text>
              <CreditsSvg />
            </Credits>
          </About>
        </Section>
        <Section width="1106px" primaryColor>
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <Title style={{ marginBottom: 55 }}>{t("reactnative:projectsHowWasItDoneTitle")}</Title>
            <Flex style={{ margin: "auto 0" }} columnOnMobile>
              <Text>
                <Trans i18nKey="reactnative:projectsCustomerHowWasItDoneText">
                  Foi construido utilizando <strong>React</strong> em <strong>typescript</strong>,
                  com <strong>Redux</strong> para controlar o estado da aplicação. E a estilização
                  dos componentes feita com <strong>emotion</strong>.
                </Trans>
              </Text>
            </Flex>
          </Flex>
          <DotsStripe right />
        </Section>
        <Section width="1206px">
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <Title style={{ marginBottom: 55 }}>{t("reactnative:projectsGalleryTitle")}</Title>
            <Flex style={{ margin: "auto 0" }} columnOnMobile>
              <GalleryItem
                width={galleryDimensions.width}
                height={galleryDimensions.height}
                imageSrc={mypointsImage}
              >
                {t("reactnative:projectsCustomerGalleryMyPoints")}
              </GalleryItem>
              <GalleryItem
                width={galleryDimensions.width}
                height={galleryDimensions.height}
                imageSrc={orderImage}
              >
                {t("reactnative:projectsCustomerGalleryCreateGiftCard")}
              </GalleryItem>
              <GalleryItem
                width={galleryDimensions.width}
                height={galleryDimensions.height}
                imageSrc={creategiftcardImage}
                isLast
              >
                {t("reactnative:projectsCustomerGalleryOrder")}
              </GalleryItem>
            </Flex>
          </Flex>
          <DotsStripe right />
        </Section>
        <Section width="1013px" primaryColor>
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <CheckOutLink href="/projects/react">
              {t("reactnative:checkOutReactProjects")}
            </CheckOutLink>
          </Flex>
        </Section>
      </Main>
    </div>
  );
};

export default SelfServiceTotem;
