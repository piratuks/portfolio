import { DashboardPageProps } from 'pages/Dashboard';
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
interface Props extends PropsWithChildren, DashboardPageProps {
  className?: string;
}
export const StyledSection: FC<Props> = ({ className, children, sectionRef }) => {
  return (
    <SectionOuterWrapper className={className ?? ''} ref={sectionRef}>
      <SectionInnerWrapper>{children}</SectionInnerWrapper>
    </SectionOuterWrapper>
  );
};
