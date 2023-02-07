import { PageProps } from 'app/App';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledSectionInnerWrapperElement = styled.div`
  color: var(--bs-gray-700);
  position: relative;
  padding: 5rem 0;
  :nth-child(even) {
    background: var(--bs-white);
  }
`;
interface Props extends PropsWithChildren, PageProps {
  className?: string;
}
export const Section: FC<Props> = ({ className, children, sectionRef }) => {
  return (
    <section className={className ?? ''} ref={sectionRef}>
      <StyledSectionInnerWrapperElement>{children}</StyledSectionInnerWrapperElement>
    </section>
  );
};
