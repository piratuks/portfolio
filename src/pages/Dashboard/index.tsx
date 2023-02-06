import { AppProps } from 'app/App';
import { FC, PropsWithChildren } from 'react';
import { Header } from './Header';

export interface DashboardPageProps {
  sectionRef: React.MutableRefObject<null | HTMLDivElement>;
}
export interface ContainerProps extends PropsWithChildren {
  isContainer: boolean;
}
export const DashboardPage: FC<AppProps> = ({ sectionRefs }) => {
  return <Header sectionRef={sectionRefs[0]} />;
};
