import { BrowserRouter } from 'react-router';

import { AppRouter } from 'app/routing/router';
import 'shared/styles/common.module.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
