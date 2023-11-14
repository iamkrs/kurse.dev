import { Title } from 'app/components';
import { EXPERIENCE_TITLE_MARGIN_TOP } from 'app/constants';
import styled from 'styled-components';

export const ExperienceTitle = styled(Title)`
  @media screen and (min-width: 771px) {
    margin-top: ${EXPERIENCE_TITLE_MARGIN_TOP}vh;
  }
`;
