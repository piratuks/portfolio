import { AppProps } from 'app/App';
import { FC, PropsWithChildren } from 'react';
import { About } from './About';
import { Contacts } from './Contacts';
import { Header } from './Header';
import { Resume } from './Resume';
import { Services } from './Services';
import { Skills } from './Skills';
import { Testmonial } from './Testmonial';

export interface ContainerProps extends PropsWithChildren {
  isContainer: boolean;
}
export const DashboardPage: FC<AppProps> = ({ sectionRefs }) => {
  return (
    <>
      <Header sectionRef={sectionRefs[0]} contactsRef={sectionRefs[5]} />
      <About sectionRef={sectionRefs[1]} />
      <Services sectionRef={sectionRefs[2]} />
      <Skills />
      <Resume sectionRef={sectionRefs[3]} />
      <Testmonial sectionRef={sectionRefs[4]} />
      <Contacts sectionRef={sectionRefs[5]} />
    </>
  );
};
