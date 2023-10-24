import { ColorBox, DoubleArrow, Flex, Text } from 'app/components';
import { Experience as ExperienceData } from 'app/types';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

type ExperienceProps = {
  data: ExperienceData;
};

export const Experience: FC<ExperienceProps> = ({ data, ...props }) => {
  const t = useTranslations('home');

  const { name, position, startDate, endDate, description } = data;

  const formattedStartDate = format(new Date(startDate), 'yyyy MMM');
  const formattedEndDate = endDate && format(new Date(endDate), 'yyyy MMM');

  return (
    <Flex $alignCenter>
      <Flex style={{ marginRight: 99 }} $column>
        <Text>
          <strong>{name}</strong>
        </Text>
        <Text $noWrap style={{ marginBottom: 19 }}>
          {t(`positions.${position}`)}
        </Text>
        <ColorBox>
          <Text $primaryColor $noWrap>
            {formattedStartDate} <DoubleArrow $primaryColor />{' '}
            {formattedEndDate || t('experienceNow')}
          </Text>
        </ColorBox>
      </Flex>
      <Flex $column>
        {description.map((item, index) => (
          <Text
            style={{
              ...(index !== description.length - 1 && { marginBottom: 33 }),
            }}
          >
            {t.rich(`experiences.${item}`, {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
