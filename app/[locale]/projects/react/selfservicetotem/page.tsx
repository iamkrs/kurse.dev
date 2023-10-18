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
import SelfServiceTotemSvg from "app/components/Projects/SelfServiceTotemSvg";
import { useHorizontalScroll } from "app/hooks";
import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import categoryImage from "public/images/selfservicetotem/category.png";
import checkoutImage from "public/images/selfservicetotem/checkout.png";
import productImage from "public/images/selfservicetotem/product.png";

const SelfServiceTotemPage: NextPage = () => {
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
              <SelfServiceTotemSvg />
              <ProjectDescription>
                <MainTitle>{t("projectsTotemTitle")}</MainTitle>
                <Text style={{ marginRight: 15, marginBottom: 33 }}>
                  {t("projectsTotemDescription")}
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
              {t.rich("projectsTotemAboutText", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </Text>
            <Credits>
              <Text $small>{t("projectsTotemAboutCredits")}</Text>
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
                {t.rich("projectsTotemHowWasItDoneText", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </Text>
            </Flex>
          </Flex>
          <DotsStripe $right />
        </Section>
        <Section $width="1406px">
          <DotsStripe $left $width="32px" />
          <Flex $column $justifyCenter $fullHeight>
            <Title style={{ marginBottom: 55 }}>
              {t("projectsGalleryTitle")}
            </Title>
            <Flex $columnOnMobile>
              <GalleryItem imageSrc={categoryImage}>
                {t("projectsTotemGalleryCategory")}
              </GalleryItem>
              <GalleryItem imageSrc={productImage}>
                {t("projectsTotemGalleryProduct")}
              </GalleryItem>
              <GalleryItem imageSrc={checkoutImage} $isLast>
                {t("projectsTotemGalleryCheckout")}
              </GalleryItem>
            </Flex>
          </Flex>
          <DotsStripe $right />
        </Section>
        <Section $width="1013px" $primaryColor>
          <DotsStripe $left $width="32px" />
          <Flex $column $justifyCenter $fullHeight>
            <CheckOutLink href="/projects/react">
              {t("checkOutMoreProjects")}
            </CheckOutLink>
          </Flex>
        </Section>
      </Main>
    </div>
  );
};

export default SelfServiceTotemPage;
