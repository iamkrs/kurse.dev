'use client';

import {
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
  About,
  Credits,
  CreditsSvg,
  GalleryItem,
  Project,
  ProjectDescription,
  SelfServiceTotemSvg,
} from 'app/components/projects';
import type { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import { CATEGORY_IMAGE, CHECKOUT_IMAGE, PRODUCT_IMAGE } from './constants';

const SelfServiceTotemPage: NextPage = () => {
  const t = useTranslations('react');

  return (
    <>
      <Section $width={1145} $primaryColor>
        <Flex $column $justifyCenter $fullHeight>
          <Project $noMargin $last>
            <SelfServiceTotemSvg />
            <ProjectDescription>
              <MainTitle>{t('projectsTotemTitle')}</MainTitle>
              <Text style={{ marginRight: 15, marginBottom: 33 }}>
                {t('projectsTotemDescription')}
              </Text>
              {/* <Button filled>Demo</Button> */}
            </ProjectDescription>
          </Project>
        </Flex>
        <ScrollDown />
        <DotsStripe $right $hideOnMobile />
      </Section>
      <Section $width={1106}>
        <DotsStripe $left $width='32px' />
        <About>
          <Title style={{ marginBottom: 55 }}>{t('projectsAboutTitle')}</Title>
          <Text>
            {t.rich('projectsTotemAboutText', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </Text>
          <Credits>
            <Text $small>{t('projectsTotemAboutCredits')}</Text>
            <CreditsSvg />
          </Credits>
        </About>
      </Section>
      <Section $width={1106} $primaryColor>
        <DotsStripe $left $width='32px' />
        <Flex $column $justifyCenter $fullHeight>
          <Title style={{ marginBottom: 55 }}>
            {t('projectsHowWasItDoneTitle')}
          </Title>
          <Flex $columnOnMobile>
            <Text>
              {t.rich('projectsTotemHowWasItDoneText', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </Text>
          </Flex>
        </Flex>
        <DotsStripe $right />
      </Section>
      <Section $width={1406}>
        <DotsStripe $left $width='32px' />
        <Flex $column $justifyCenter $fullHeight>
          <Title style={{ marginBottom: 55 }}>
            {t('projectsGalleryTitle')}
          </Title>
          <Flex $columnOnMobile>
            <GalleryItem imageSrc={CATEGORY_IMAGE}>
              {t('projectsTotemGalleryCategory')}
            </GalleryItem>
            <GalleryItem imageSrc={PRODUCT_IMAGE}>
              {t('projectsTotemGalleryProduct')}
            </GalleryItem>
            <GalleryItem imageSrc={CHECKOUT_IMAGE} $isLast>
              {t('projectsTotemGalleryCheckout')}
            </GalleryItem>
          </Flex>
        </Flex>
        <DotsStripe $right />
      </Section>
      <Section $width={1013} $primaryColor>
        <DotsStripe $left $width='32px' />
        <Flex $column $justifyCenter $fullHeight>
          <CheckOutLink href='/projects/react'>
            {t('checkOutMoreProjects')}
          </CheckOutLink>
        </Flex>
      </Section>
    </>
  );
};

export default SelfServiceTotemPage;
