import { Provider } from 'react-redux';

import { store } from 'app/store';

import type { ComponentType } from 'react';

export const withReduxProvider = <P extends object>(Component: ComponentType<P>) => (props: P) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};
