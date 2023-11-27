'use client';

import {
  CheckOutLink,
  DotsStripe,
  Flex,
  MainTitle,
  ScrollDownFlex,
  Section,
  Text,
  Title,
} from 'app/components';
import {
  About,
  Credits,
  CreditsSvg,
  CustomerLoyaltyAppSvg,
  GalleryItem,
  Project,
  ProjectDescription,
} from 'app/components/projects';
import type { NextPage } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import {
  CREATE_GIFT_CARD_IMAGE,
  GALLERY_ITEM_HEIGHT,
  GALLERY_ITEM_WIDTH,
  MY_POINTS_IMAGE,
  ORDER_IMAGE,
} from './constants';

const CustomerLoyaltyAppPage: NextPage = () => {
  const locale = useLocale();
  const t = useTranslations('reactnative');

  return (
    <>
      <Section $primaryColor>
        <ScrollDownFlex $column $justifyCenter $fullHeight>
          <Project $noMargin $last>
            <CustomerLoyaltyAppSvg />
            <ProjectDescription>
              <MainTitle>{t('projectsCustomerTitle')}</MainTitle>
              <Text style={{ marginRight: 15, marginBottom: 33 }}>
                {t('projectsCustomerDescription')}
              </Text>
              {/* <Button filled>Demo</Button> */}
            </ProjectDescription>
          </Project>
        </ScrollDownFlex>
        <DotsStripe $right $hideOnMobile />
      </Section>
      <Section>
        <DotsStripe $left $width='32px' />
        <About>
          <Title style={{ marginBottom: 55 }}>{t('projectsAboutTitle')}</Title>
          <Text>{t('projectsCustomerAboutText')}</Text>
          <Credits>
            <Text $small>{t('projectsCustomerAboutCredits')}</Text>
            <CreditsSvg />
          </Credits>
        </About>
      </Section>
      <Section $primaryColor>
        <DotsStripe $left $width='32px' />
        <Flex $column $justifyCenter $fullHeight>
          <Title style={{ marginBottom: 55 }}>
            {t('projectsHowWasItDoneTitle')}
          </Title>
          <Flex $columnOnMobile>
            <Text>
              {t.rich('projectsCustomerHowWasItDoneText', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </Text>
          </Flex>
        </Flex>
        <DotsStripe $right />
      </Section>
      <Section>
        <DotsStripe $left $width='32px' />
        <Flex $column $justifyCenter $fullHeight>
          <Title style={{ marginBottom: 55 }}>
            {t('projectsGalleryTitle')}
          </Title>
          <Flex $columnOnMobile>
            <GalleryItem
              width={GALLERY_ITEM_WIDTH}
              height={GALLERY_ITEM_HEIGHT}
              imageSrc={MY_POINTS_IMAGE}
            >
              {t('projectsCustomerGalleryMyPoints')}
            </GalleryItem>
            <GalleryItem
              width={GALLERY_ITEM_WIDTH}
              height={GALLERY_ITEM_HEIGHT}
              imageSrc={ORDER_IMAGE}
            >
              {t('projectsCustomerGalleryCreateGiftCard')}
            </GalleryItem>
            <GalleryItem
              width={GALLERY_ITEM_WIDTH}
              height={GALLERY_ITEM_HEIGHT}
              imageSrc={CREATE_GIFT_CARD_IMAGE}
              $isLast
            >
              {t('projectsCustomerGalleryOrder')}
            </GalleryItem>
          </Flex>
        </Flex>
        <DotsStripe $right />
      </Section>
      <Section $primaryColor>
        <DotsStripe $left $width='32px' />
        <Flex $column $justifyCenter $fullHeight>
          <CheckOutLink href='/projects/react'>
            {t('checkOutReactProjects')}
          </CheckOutLink>
        </Flex>
      </Section>
    </>
  );
};

export default CustomerLoyaltyAppPage;
