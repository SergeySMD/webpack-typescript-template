import { Menu as AntdMenu } from 'antd';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router'; // Make sure to import from 'react-router-dom'

import styles from './Menu.module.scss';
import { IMenuItem } from 'shared/types';

interface MenuProps {
  menuItems: IMenuItem[];
}
export const Menu = ({ menuItems }: MenuProps) => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    const path = location.pathname;
    setSelectedKeys([path]);
  }, [location]);

  const items = menuItems.map(({ path, title, icon }) => ({
    key: path,
    icon,
    label: <Link to={path}>{title}</Link>,
  }));

  return (
    <AntdMenu className={styles.menu} mode="inline" selectedKeys={selectedKeys} items={items} />
  );
};

