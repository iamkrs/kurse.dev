import {
  Button,
  CheckOutLink,
  CustomerLoyaltyAppSvg,
  DotsStripe,
  Flex,
  Header,
  Main,
  MainTitle,
  Project,
  ProjectDescription,
  ReactNativeLogos,
  ScrollDown,
  Section,
  Text,
  Title,
} from "app/components";
import { useHorizontalScroll } from "app/hooks";
import type { NextPage } from "next";
import { useLocale, useTranslations } from "next-intl";
import Head from "next/head";

const ReactNative: NextPage = () => {
  const scrollRef = useHorizontalScroll();
  const t = useTranslations();
  const locale = useLocale();

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
        <Section $width="1100px" $paddingRight="270px">
          <Flex $column $justifyCenter $fullHeight>
            <Flex>
              <MainTitle>React Native</MainTitle>
            </Flex>
            <Text style={{ marginBottom: 47, maxWidth: 440 }}>
              {t("reactnative:description")}
            </Text>
            <ReactNativeLogos />
          </Flex>
          <ScrollDown />
          <DotsStripe $right $hideOnMobile />
        </Section>
        <Section $width="1240px" $primaryColor>
          <DotsStripe $left $width="32px" />
          <Flex $column $justifyCenter $fullHeight>
            <Title style={{ marginBottom: 77 }}>
              {t("reactnative:projectsTitle")}
            </Title>
            <Flex $columnOnMobile>
              <Project $last>
                <CustomerLoyaltyAppSvg />
                <ProjectDescription>
                  <Title
                    $medium
                    style={{
                      marginRight: 15,
                      marginBottom: 20,
                      maxWidth: locale === "en" ? 280 : 330,
                    }}
                  >
                    {t("reactnative:projectsCustomerTitle")}
                  </Title>
                  <Text style={{ marginRight: 15, marginBottom: 33 }}>
                    {t("reactnative:projectsCustomerDescription")}
                  </Text>
                  <Button
                    $filled
                    href="/projects/reactnative/customerloyaltyapp"
                  >
                    {t("reactnative:projectsCustomerButton")}
                  </Button>
                </ProjectDescription>
              </Project>
            </Flex>
          </Flex>
          <DotsStripe $right />
        </Section>
        <Section $width="1013px">
          <DotsStripe $left $width="32px" />
          <Flex $column $justifyCenter $fullHeight>
            <CheckOutLink $primaryColor href="/projects/react">
              {t("reactnative:checkOutReactProjects")}
            </CheckOutLink>
          </Flex>
        </Section>
      </Main>
    </div>
  );
};

export default ReactNative;
