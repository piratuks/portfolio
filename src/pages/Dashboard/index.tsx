import { AppProps } from 'app/App';
import { FC, PropsWithChildren } from 'react';
import { About } from './About';
import { Header } from './Header';
import { Services } from './Services';
import { Skills } from './Skills';
import { Testmonial } from './Testmonial';

export interface DashboardPageProps {
  sectionRef?: React.MutableRefObject<null | HTMLDivElement>;
}
export interface ContainerProps extends PropsWithChildren {
  isContainer: boolean;
}
export const DashboardPage: FC<AppProps> = ({ sectionRefs }) => {
  return (
    <>
      <Header sectionRef={sectionRefs[0]} contactsRef={sectionRefs[6]} />
      <About sectionRef={sectionRefs[1]} />
      <Services sectionRef={sectionRefs[2]} />
      <Skills />
      <div ref={sectionRefs[3]}></div>
      <div ref={sectionRefs[4]}></div>
      {/* //resume -> 3 */}
      {/* //portfolio -> 4 */}
      <Testmonial sectionRef={sectionRefs[5]} />
      {/* //contacts -> 6 */}
    </>
  );
};
