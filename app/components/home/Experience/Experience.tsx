import { ColorBox, Flex, Text } from 'app/components';
import { DoubleArrow } from 'app/components/home';
import { Experience as ExperienceData } from 'app/types';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Description, Wrapper } from './styles';

type ExperienceProps = {
  data: ExperienceData;
  $isLast?: boolean;
};

export const Experience: FC<ExperienceProps> = ({
  data,
  $isLast,
  ...props
}) => {
  const t = useTranslations('home');
  const { name, position, startDate, endDate, description } = data;
  const formattedStartDate = format(new Date(startDate), 'yyyy MMM');
  const formattedEndDate = endDate && format(new Date(endDate), 'yyyy MMM');

  return (
    <Wrapper $alignCenter {...{ $isLast }}>
      <Flex style={{ marginRight: 99 }} $column>
        <Text>
          <strong>{name}</strong>
        </Text>
        <Text $noWrap style={{ marginBottom: 19 }}>
          {t(`positions.${position}`)}
        </Text>
        <ColorBox>
          <Text $primaryColor $noWrap>
            {formattedStartDate} <DoubleArrow $primaryColor />
            {formattedEndDate || t('experienceNow')}
          </Text>
        </ColorBox>
      </Flex>
      <Flex $column $flexWrap style={{ maxHeight: 555 }}>
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
      </Flex>
    </Wrapper>
  );
};
