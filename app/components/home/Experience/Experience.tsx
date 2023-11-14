import { Text } from 'app/components';
import { Experience as ExperienceData } from 'app/types';
import { format } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';
import { useLocale, useTranslations } from 'next-intl';
import { FC } from 'react';
import { Description, DescriptionsGrid, InfoWrapper, Wrapper } from './styles';

type ExperienceProps = {
  data: ExperienceData;
  $isLast?: boolean;
};

export const Experience: FC<ExperienceProps> = ({ data, $isLast }) => {
  const t = useTranslations('home');
  const { name, position, startDate, endDate, description } = data;
  const locale = useLocale();
  const formatOptions = { locale: locale === 'br' ? ptBR : enUS };
  const formatTemplate = locale === 'br' ? `MMM. 'de' yyyy` : `MMM. yyyy`;
  const formattedStartDate = t('experienceStartDate', {
    startDate: format(new Date(startDate), formatTemplate, formatOptions),
  });
  const formattedEndDate = endDate
    ? t('experienceEndDate', {
        endDate: format(new Date(endDate), formatTemplate, formatOptions),
      })
    : t('experienceNow');
  const formattedDate = `${formattedStartDate} ${formattedEndDate}`;

  return (
    <Wrapper $columnOnMobile $column {...{ $isLast }}>
      <InfoWrapper $column>
        <Text $noWrap $medium>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 33,
          }}
        >
          <strong>{t(`positions.${position}`)}</strong>
        </Text>
        <Text
          // TODO: move to styles
          $noWrap
          $small
          style={{
            marginTop: 8,
            fontSize: 18,
          }}
        >
          {formattedDate}
        </Text>
      </InfoWrapper>

      <DescriptionsGrid>
        {description.map((item, index) => (
          <Description
            key={index.toString()}
            $isLast={index === description.length - 1}
          >
            {t.rich(`experiences.${item}`, {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </Description>
        ))}
      </DescriptionsGrid>
    </Wrapper>
  );
};
