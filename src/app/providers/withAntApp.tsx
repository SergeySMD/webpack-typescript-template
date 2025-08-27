import { App } from 'antd';
import type { ComponentType } from 'react';

export const withAntApp = <P extends object>(Component: ComponentType<P>) => (props: P) => {
  return (
    <App>
      <Component {...props} />
    </App>
  );
};
