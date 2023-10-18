"use client";

import {
  CheckOutLink,
  CustomerLoyaltyAppSvg,
  DotsStripe,
  Flex,
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
import type { NextPage } from "next";
import { useLocale, useTranslations } from "next-intl";
import creategiftcardImage from "public/images/customerloyaltyapp/creategiftcard.png";
import mypointsImage from "public/images/customerloyaltyapp/mypoints.png";
import orderImage from "public/images/customerloyaltyapp/order.png";

const galleryDimensions = {
  width: 180,
  height: 386,
};

const SelfServiceTotem: NextPage = () => {
  const locale = useLocale();
  const t = useTranslations("reactnative");

  return (
    <>
      <Section
        $width={`${locale === "en" ? 1145 : 1300}px`}
        $paddingRight="270px"
        $primaryColor
      >
        <Flex $column $justifyCenter $fullHeight>
          <Project $noMargin $last>
            <CustomerLoyaltyAppSvg />
            <ProjectDescription>
              <MainTitle>{t("projectsCustomerTitle")}</MainTitle>
              <Text style={{ marginRight: 15, marginBottom: 33 }}>
                {t("projectsCustomerDescription")}
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
          <Title style={{ marginBottom: 55 }}>{t("projectsAboutTitle")}</Title>
          <Text>{t("projectsCustomerAboutText")}</Text>
          <Credits>
            <Text $small>{t("projectsCustomerAboutCredits")}</Text>
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
              {t.rich("projectsCustomerHowWasItDoneText", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </Text>
          </Flex>
        </Flex>
        <DotsStripe $right />
      </Section>
      <Section $width="1206px">
        <DotsStripe $left $width="32px" />
        <Flex $column $justifyCenter $fullHeight>
          <Title style={{ marginBottom: 55 }}>
            {t("projectsGalleryTitle")}
          </Title>
          <Flex $columnOnMobile>
            <GalleryItem
              width={galleryDimensions.width}
              height={galleryDimensions.height}
              imageSrc={mypointsImage}
            >
              {t("projectsCustomerGalleryMyPoints")}
            </GalleryItem>
            <GalleryItem
              width={galleryDimensions.width}
              height={galleryDimensions.height}
              imageSrc={orderImage}
            >
              {t("projectsCustomerGalleryCreateGiftCard")}
            </GalleryItem>
            <GalleryItem
              width={galleryDimensions.width}
              height={galleryDimensions.height}
              imageSrc={creategiftcardImage}
              $isLast
            >
              {t("projectsCustomerGalleryOrder")}
            </GalleryItem>
          </Flex>
        </Flex>
        <DotsStripe $right />
      </Section>
      <Section $width="1013px" $primaryColor>
        <DotsStripe $left $width="32px" />
        <Flex $column $justifyCenter $fullHeight>
          <CheckOutLink href="/projects/react">
            {t("checkOutReactProjects")}
          </CheckOutLink>
        </Flex>
      </Section>
    </>
  );
};

export default SelfServiceTotem;
