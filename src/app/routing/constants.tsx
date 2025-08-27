import { HomeOutlined } from '@ant-design/icons';
import { PageURL } from 'shared/constants';
import { IMenuItem } from 'shared/types';

export const MENU_ITEMS: IMenuItem[] = [
  { path: PageURL.HOME, title: 'Главная', icon: <HomeOutlined /> },
];
