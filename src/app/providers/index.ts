import { compose } from '@reduxjs/toolkit';

import { withAntApp } from './withAntApp';
import { withAntConfigProvider } from './withAntConfigProvider';
import { withReduxProvider } from './withReduxProvider';

export const withProviders = compose(
  withAntConfigProvider,
  withAntApp,
  withReduxProvider,
);
