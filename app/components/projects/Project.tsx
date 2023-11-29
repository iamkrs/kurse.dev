import styled, { css } from 'styled-components';

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
    ${({ $noMargin }) =>
      !$noMargin &&
      css`
        margin: 0 3.125rem;
      `}
  }

  ${({ $last }) =>
    !$last &&
    css`
      @media (max-width: 771px) {
        margin-bottom: 3.75rem;
      }
    `}
`;

export { Project };
