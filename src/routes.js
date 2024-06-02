import { Outlet } from 'react-router-dom';
import { Layout as DashboardLayout } from './layouts/dashboard/layout';
import NotFoundPage from './pages/404';
import ReportsPage from './pages';
import SettingsPage from './pages/settings';

export const routes = [
  {
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <ReportsPage />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      },
    ]
  },
  {
    path: '404',
    element: <NotFoundPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];
