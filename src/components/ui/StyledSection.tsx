import { DashboardPageProps } from 'pages/Dashboard';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledSectionOuterWrapper = styled.section`
  .bg-white {
    background-color: #fff;
  }

  .bg-gray {
    background: white;
  }
`;
const StyledSectionInnerWrapper = styled.div`
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
    <StyledSectionOuterWrapper className={className ?? ''} ref={sectionRef}>
      <StyledSectionInnerWrapper>{children}</StyledSectionInnerWrapper>
    </StyledSectionOuterWrapper>
  );
};
