import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const SectionOuterWrapper = styled.section`
  .bg-white {
    background-color: #fff;
  }

  .bg-gray {
    background: white;
  }
`;
const SectionInnerWrapper = styled.div`
  color: #495057;
  position: relative;
  padding: 5rem 0;
  :nth-child(even) {
    background: white;
  }
`;

export interface SectionProps extends PropsWithChildren {
  className?: string;
}
export const StyledSection: FC<SectionProps> = ({ className, children }) => {
  return (
    <SectionOuterWrapper className={className ?? ''}>
      <SectionInnerWrapper>{children}</SectionInnerWrapper>
    </SectionOuterWrapper>
  );
};
