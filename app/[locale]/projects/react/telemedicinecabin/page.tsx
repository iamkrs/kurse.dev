"use client";

import {
  CheckOutLink,
  DotsStripe,
  Flex,
  Header,
  Main,
  MainTitle,
  Project,
  ProjectDescription,
  ScrollDown,
  Section,
  Text,
  Title,
} from "app/components";
import About from "app/components/Projects/About";
import Credits from "app/components/Projects/Credits";
import CreditsSvg from "app/components/Projects/CustomerLoyaltyApp/CreditsSvg";
import GalleryItem from "app/components/Projects/GalleryItem";
import TelemedicineCabinSvg from "app/components/Projects/TelemedicineCabinSvg";
import { useHorizontalScroll } from "app/hooks";
import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import consultantImage from "public/images/telemedicinecabin/consultant.png";
import dashboardImage from "public/images/telemedicinecabin/dashboard.png";
import loginImage from "public/images/telemedicinecabin/login.png";

const galleryDimensions = {
  width: 403,
  height: 253,
};

const TelemedicineCabin: NextPage = () => {
  const scrollRef = useHorizontalScroll();
  const t = useTranslations("react");

  return (
    <div>
      <Head>
        <title>Kurse.dev</title>
        <meta
          name="description"
          content="Kurse is a full stack developer and designer"
        />
      </Head>
      <Header />
      <Main ref={scrollRef}>
        <Section $width="1145px" $paddingRight="270px" $primaryColor>
          <Flex $column $justifyCenter $fullHeight>
            <Project $noMargin $last>
              <TelemedicineCabinSvg />
              <ProjectDescription>
                <MainTitle>{t("projectsCabinTitle")}</MainTitle>
                <Text style={{ marginRight: 15, marginBottom: 33 }}>
                  {t("projectsCabinDescription")}
                </Text>
                {/* <Button filled>Demo</Button> */}
              </ProjectDescription>
            </Project>
          </Flex>
          <ScrollDown />
          <DotsStripe $right $hideOnMobile />
        </Section>
        <Section $width="1106px">
          <DotsStripe $left $width="32px" />
          <About>
            <Title style={{ marginBottom: 55 }}>
              {t("projectsAboutTitle")}
            </Title>
            <Text>
              {t.rich("projectsCabinAboutText", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </Text>
            <Credits>
              <Text $small>{t("projectsCabinAboutCredits")}</Text>
              <CreditsSvg />
            </Credits>
          </About>
        </Section>
        <Section $width="1106px" $primaryColor>
          <DotsStripe $left $width="32px" />
          <Flex $column $justifyCenter $fullHeight>
            <Title style={{ marginBottom: 55 }}>
              {t("projectsHowWasItDoneTitle")}
            </Title>
            <Flex $columnOnMobile>
              <Text>
                {t.rich("projectsCabinHowWasItDoneText", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                  br: () => <br />,
                })}
              </Text>
            </Flex>
          </Flex>
          <DotsStripe $right />
        </Section>
        <Section $width="1900px">
          <DotsStripe $left $width="32px" />
          <Flex $column $justifyCenter $fullHeight>
            <Title style={{ marginBottom: 55 }}>
              {t("projectsGalleryTitle")}
            </Title>
            <Flex $columnOnMobile>
              <GalleryItem
                imageSrc={loginImage}
                width={galleryDimensions.width}
                height={galleryDimensions.height}
              >
                {t("projectsCabinGalleryLogin")}
              </GalleryItem>
              <GalleryItem
                imageSrc={consultantImage}
                width={galleryDimensions.width}
                height={galleryDimensions.height}
              >
                {t("projectsCabinGalleryDashboard")}
              </GalleryItem>
              <GalleryItem
                imageSrc={dashboardImage}
                width={galleryDimensions.width}
                height={galleryDimensions.height}
                $isLast
              >
                {t("projectsCabinGalleryConsultation")}
              </GalleryItem>
            </Flex>
          </Flex>
          <DotsStripe $right />
        </Section>
        <Section $width="1013px" $primaryColor>
          <DotsStripe $left $width="32px" />
          <Flex $column $justifyCenter $fullHeight>
            <CheckOutLink href="/projects/reactnative">
              {t("checkOutReactNativeProjects")}
            </CheckOutLink>
          </Flex>
        </Section>
      </Main>
    </div>
  );
};

export default TelemedicineCabin;
