import {
  CheckOutLink,
  CustomerLoyaltyAppSvg,
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
import { useHorizontalScroll } from "app/hooks";
import type { NextPage } from "next";
import { i18n, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useLocale, useTranslations } from "next-intl";
import Head from "next/head";
import creategiftcardImage from "../../../public/images/customerloyaltyapp/creategiftcard.png";
import mypointsImage from "../../../public/images/customerloyaltyapp/mypoints.png";
import orderImage from "../../../public/images/customerloyaltyapp/order.png";
import About from "app/components/Projects/About";
import Credits from "app/components/Projects/Credits";
import CreditsSvg from "app/components/Projects/CustomerLoyaltyApp/CreditsSvg";
import GalleryItem from "app/components/Projects/GalleryItem";

const galleryDimensions = {
  width: 180,
  height: 386,
};

const SelfServiceTotem: NextPage = () => {
  const locale = useLocale();
  const scrollRef = useHorizontalScroll();
  const t = useTranslations();

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
        <Section
          $width={`${locale === "en" ? 1145 : 1300}px`}
          $paddingRight="270px"
          $primaryColor
        >
          <Flex $column $justifyCenter $fullHeight>
            <Project noMargin $last>
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
          <DotsStripe $right $hideOnMobile />
        </Section>
        <Section $width="1106px">
          <DotsStripe $left $width="32px" />
          <About>
            <Title style={{ marginBottom: 55 }}>
              {t("reactnative:projectsAboutTitle")}
            </Title>
            <Text>{t("reactnative:projectsCustomerAboutText")}</Text>
            <Credits>
              <Text $small>
                {t("reactnative:projectsCustomerAboutCredits")}
              </Text>
              <CreditsSvg />
            </Credits>
          </About>
        </Section>
        <Section $width="1106px" $primaryColor>
          <DotsStripe $left $width="32px" />
          <Flex $column $justifyCenter $fullHeight>
            <Title style={{ marginBottom: 55 }}>
              {t("reactnative:projectsHowWasItDoneTitle")}
            </Title>
            <Flex $columnOnMobile>
              <Text>
                <Trans i18nKey="reactnative:projectsCustomerHowWasItDoneText">
                  Foi construido utilizando <strong>React</strong> em{" "}
                  <strong>typescript</strong>, com <strong>Redux</strong> para
                  controlar o estado da aplicação. E a estilização dos
                  componentes feita com <strong>emotion</strong>.
                </Trans>
              </Text>
            </Flex>
          </Flex>
          <DotsStripe $right />
        </Section>
        <Section $width="1206px">
          <DotsStripe $left $width="32px" />
          <Flex $column $justifyCenter $fullHeight>
            <Title style={{ marginBottom: 55 }}>
              {t("reactnative:projectsGalleryTitle")}
            </Title>
            <Flex $columnOnMobile>
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
                $isLast
              >
                {t("reactnative:projectsCustomerGalleryOrder")}
              </GalleryItem>
            </Flex>
          </Flex>
          <DotsStripe $right />
        </Section>
        <Section $width="1013px" $primaryColor>
          <DotsStripe $left $width="32px" />
          <Flex $column $justifyCenter $fullHeight>
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
