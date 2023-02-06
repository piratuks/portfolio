import { DashboardPage } from 'pages/Dashboard';
import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppProps } from './App';
import { routes } from './constant';

export const AppRoutes: FC<AppProps> = ({ sectionRefs }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.dashboard} />} />
      <Route path={routes.dashboard}>
        <Route path={routes.dashboard} element={<DashboardPage sectionRefs={sectionRefs} />} />
        <Route path="*" element={<Navigate to={routes.dashboard} />} />
      </Route>
      <Route path="*" element={<Navigate to={routes.dashboard} />} />
    </Routes>
  );
};
