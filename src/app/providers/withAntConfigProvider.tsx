import { ConfigProvider } from 'antd';
import locale from 'antd/locale/ru_RU';

import { defaultTheme } from '@ant-design/compatible';

const theme = {
  ...defaultTheme,
  components: {
    Modal: {
      titleFontSize: 30,
    },
    Tabs: {
      horizontalItemPadding: '12px 16px',
      horizontalMargin: '0',
    },
  },
};

export const withAntConfigProvider = <P extends object>(Component: React.ComponentType<P>) => (props: P) => {
  return (
    <ConfigProvider locale={locale} theme={theme}>
      <Component {...props} />
    </ConfigProvider>
  );
};

