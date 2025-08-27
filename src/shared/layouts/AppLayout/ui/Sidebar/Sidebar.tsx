import { Layout } from 'antd';

import { Menu } from '../Menu';
import styles from './Sidebar.module.scss';
import { IMenuItem } from 'shared/types';

const { Sider } = Layout;

type SidebarProps = {
  menuItems: IMenuItem[]
}

export const Sidebar = ({ menuItems }: SidebarProps) => {
  return (
    <Sider className={styles.sider} width={260}>
      <Menu menuItems={menuItems} />
    </Sider>
  );
};
