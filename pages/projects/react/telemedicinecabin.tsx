import type { NextPage } from "next";
import { i18n, Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import consultantImage from "../../../public/images/telemedicinecabin/consultant.png";
import dashboardImage from "../../../public/images/telemedicinecabin/dashboard.png";
import loginImage from "../../../public/images/telemedicinecabin/login.png";
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
import CreditsSvg from "../../../src/components/Projects/TelemedicineCabin/CreditsSvg";
import TelemedicineCabinSvg from "../../../src/components/Projects/TelemedicineCabinSvg";
import ScrollDown from "../../../src/components/ScrollDown";
import Section from "../../../src/components/Section";
import Text from "../../../src/components/Text";
import Title from "../../../src/components/Title";
import { useAppDispatch } from "../../../src/hooks";
import { useHorizontalScroll } from "../../../src/hooks/useHorizontalScroll";

const galleryDimensions = {
  width: 403,
  height: 253,
};

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

const TelemedicineCabin: NextPage = () => {
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
              <TelemedicineCabinSvg />
              <ProjectDescription>
                <MainTitle>{t("react:projectsCabinTitle")}</MainTitle>
                <Text style={{ marginRight: 15, marginBottom: 33 }}>
                  {t("react:projectsCabinDescription")}
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
              <Trans i18nKey="react:projectsCabinAboutText">
                O projeto Maria é o primeiro protótipo de cabine médica para uso de telemedicina do
                Brasil. O seu objetivo é levar saúde básica de qualidade para áreas remotas (rurais,
                interior, nordeste, fronteira) onde existe falta de médico ou dificuldade de atuação
                do sistema único de saúde (SUS). <br />
                <br />
                De maneira resumida a cabine substitui um posto de saúde e traz um médico virtual
                para a comunidade. O projeto é uma parceria entre UTFPR & ICI
              </Trans>
            </Text>
            <Credits>
              <Text small>{t("react:projectsCabinAboutCredits")}</Text>
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
                <Trans i18nKey="react:projectsCabinHowWasItDoneText">
                  Foi construido utilizando <strong>React</strong> e <strong>NextJS</strong> em{" "}
                  <strong>typescript</strong>, com <strong>Redux</strong> para controlar o estado da
                  aplicação. E a estilização dos componentes feita com <strong>emotion</strong>.{" "}
                  <br />
                  <br />
                  Faz uso de websockets para a troca de mensagens e outras funcionalidades
                  utilizando <strong>Socket.IO</strong>. E para a comunicação em tempo real é
                  utilizado o <strong>WebRTC</strong>.
                  <br />
                  <br />
                  Para o banco de dados é utilizado o <strong>MongoDB</strong>.
                </Trans>
              </Text>
            </Flex>
          </Flex>
          <DotsStripe right />
        </Section>
        <Section width="1900px">
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <Title style={{ marginBottom: 55 }}>{t("react:projectsGalleryTitle")}</Title>
            <Flex style={{ margin: "auto 0" }} columnOnMobile>
              <GalleryItem
                imageSrc={loginImage}
                width={galleryDimensions.width}
                height={galleryDimensions.height}
              >
                {t("react:projectsCabinGalleryLogin")}
              </GalleryItem>
              <GalleryItem
                imageSrc={consultantImage}
                width={galleryDimensions.width}
                height={galleryDimensions.height}
              >
                {t("react:projectsCabinGalleryDashboard")}
              </GalleryItem>
              <GalleryItem
                imageSrc={dashboardImage}
                width={galleryDimensions.width}
                height={galleryDimensions.height}
                isLast
              >
                {t("react:projectsCabinGalleryConsultation")}
              </GalleryItem>
            </Flex>
          </Flex>
          <DotsStripe right />
        </Section>
        <Section width="1013px" primaryColor>
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <CheckOutLink href="/projects/reactnative">
              {t("react:checkOutReactNativeProjects")}
            </CheckOutLink>
          </Flex>
        </Section>
      </Main>
    </div>
  );
};

export default TelemedicineCabin;
