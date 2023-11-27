import styled from 'styled-components';

type ProjectProps = {
  $last?: boolean;
  $noMargin?: boolean;
};

const Project = styled.div<ProjectProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 771px) {
    flex-direction: row;
    min-width: 66rem;
    ${({ $noMargin }) => !$noMargin && `margin: 0 50px;`}
  }

  ${({ $last }) =>
    !$last &&
    `
    @media (max-width: 771px) {
      margin-bottom: 60px;
    }
  `}
`;

export { Project };
