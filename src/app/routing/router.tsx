import { Navigate, Route, Routes } from 'react-router';
import { MENU_ITEMS } from './constants';
import { PageURL } from 'shared/constants';
import { AppLayout } from 'shared/layouts';
import { HomePage } from 'pages/HomePage';
import { NotFound } from 'pages/NotFound';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout menuItems={MENU_ITEMS} />}>
        <Route index element={<Navigate to={PageURL.HOME} replace />} />
        <Route path={PageURL.HOME} element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
