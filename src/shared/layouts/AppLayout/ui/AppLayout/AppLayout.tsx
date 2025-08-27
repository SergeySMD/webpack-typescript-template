import { Layout } from 'antd';
import { Outlet } from 'react-router';

import styles from './AppLayout.module.scss';
import { Sidebar } from '../Sidebar';
import { IMenuItem } from 'shared/types';

const { Content } = Layout;

interface AppLayoutProps {
  menuItems: IMenuItem[];
  children?: React.ReactNode;
}

export const AppLayout = ({ menuItems, children }: AppLayoutProps) => {
  return (
    <Layout className={styles.layout}>
      <Layout>
        <Sidebar menuItems={menuItems} />
        <Content className={styles.content}>
          {children}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

