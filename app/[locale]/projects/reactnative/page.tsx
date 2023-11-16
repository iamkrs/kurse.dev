'use client';

import {
  Button,
  CheckOutLink,
  DotsStripe,
  Flex,
  MainTitle,
  ScrollDown,
  Section,
  Text,
  Title,
} from 'app/components';
import {
  CustomerLoyaltyAppSvg,
  Project,
  ProjectDescription,
  ReactNativeLogos,
} from 'app/components/projects';
import type { NextPage } from 'next';
import { useLocale, useTranslations } from 'next-intl';

const ReactNative: NextPage = () => {
  const t = useTranslations('reactnative');
  const locale = useLocale();

  return (
    <>
      <Section>
        <Flex $column $justifyCenter $fullHeight>
          <Flex>
            <MainTitle>React Native</MainTitle>
          </Flex>
          <Text style={{ marginBottom: 47, maxWidth: 440 }}>
            {t('description')}
          </Text>
          <ReactNativeLogos />
        </Flex>
        <ScrollDown />
        <DotsStripe $right $hideOnMobile />
      </Section>
      <Section $primaryColor>
        <DotsStripe $left $width='32px' />
        <Flex $column $justifyCenter $fullHeight>
          <Title style={{ marginBottom: 77 }}>{t('projectsTitle')}</Title>
          <Flex $columnOnMobile>
            <Project $last>
              <CustomerLoyaltyAppSvg />
              <ProjectDescription>
                <Title
                  $medium
                  style={{
                    marginRight: 15,
                    marginBottom: 20,
                    maxWidth: locale === 'en' ? 280 : 330,
                  }}
                >
                  {t('projectsCustomerTitle')}
                </Title>
                <Text style={{ marginRight: 15, marginBottom: 33 }}>
                  {t('projectsCustomerDescription')}
                </Text>
                <Button $filled href='/projects/reactnative/customerloyaltyapp'>
                  {t('projectsCustomerButton')}
                </Button>
              </ProjectDescription>
            </Project>
          </Flex>
        </Flex>
        <DotsStripe $right />
      </Section>
      <Section>
        <DotsStripe $left $width='32px' />
        <Flex $column $justifyCenter $fullHeight>
          <CheckOutLink $primaryColor href='/projects/react'>
            {t('checkOutReactProjects')}
          </CheckOutLink>
        </Flex>
      </Section>
    </>
  );
};

export default ReactNative;
