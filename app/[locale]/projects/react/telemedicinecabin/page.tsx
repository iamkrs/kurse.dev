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
  TelemedicineCabinSvg,
} from 'app/components/projects';
import type { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import {
  CONSULTANT_IMAGE,
  DASHBOARD_IMAGE,
  GALLERY_ITEM_HEIGHT,
  GALLERY_ITEM_WIDTH,
  LOGIN_IMAGE,
} from './constants';

const TelemedicineCabin: NextPage = () => {
  const t = useTranslations('react');

  return (
    <>
      <Section $width={1145} $primaryColor>
        <Flex $column $justifyCenter $fullHeight>
          <Project $noMargin $last>
            <TelemedicineCabinSvg />
            <ProjectDescription>
              <MainTitle>{t('projectsCabinTitle')}</MainTitle>
              <Text style={{ marginRight: 15, marginBottom: 33 }}>
                {t('projectsCabinDescription')}
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
            {t.rich('projectsCabinAboutText', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </Text>
          <Credits>
            <Text $small>{t('projectsCabinAboutCredits')}</Text>
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
              {t.rich('projectsCabinHowWasItDoneText', {
                strong: (chunks) => <strong>{chunks}</strong>,
                br: () => <br />,
              })}
            </Text>
          </Flex>
        </Flex>
        <DotsStripe $right />
      </Section>
      <Section $width={1900}>
        <DotsStripe $left $width='32px' />
        <Flex $column $justifyCenter $fullHeight>
          <Title style={{ marginBottom: 55 }}>
            {t('projectsGalleryTitle')}
          </Title>
          <Flex $columnOnMobile>
            <GalleryItem
              imageSrc={LOGIN_IMAGE}
              width={GALLERY_ITEM_WIDTH}
              height={GALLERY_ITEM_HEIGHT}
            >
              {t('projectsCabinGalleryLogin')}
            </GalleryItem>
            <GalleryItem
              imageSrc={CONSULTANT_IMAGE}
              width={GALLERY_ITEM_WIDTH}
              height={GALLERY_ITEM_HEIGHT}
            >
              {t('projectsCabinGalleryDashboard')}
            </GalleryItem>
            <GalleryItem
              imageSrc={DASHBOARD_IMAGE}
              width={GALLERY_ITEM_WIDTH}
              height={GALLERY_ITEM_HEIGHT}
              $isLast
            >
              {t('projectsCabinGalleryConsultation')}
            </GalleryItem>
          </Flex>
        </Flex>
        <DotsStripe $right />
      </Section>
      <Section $width={1013} $primaryColor>
        <DotsStripe $left $width='32px' />
        <Flex $column $justifyCenter $fullHeight>
          <CheckOutLink href='/projects/reactnative'>
            {t('checkOutReactNativeProjects')}
          </CheckOutLink>
        </Flex>
      </Section>
    </>
  );
};

export default TelemedicineCabin;
