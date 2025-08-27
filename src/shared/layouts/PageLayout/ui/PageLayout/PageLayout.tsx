import { Breadcrumb, BreadcrumbItemProps, BreadcrumbProps, Flex, Spin } from 'antd';
import { ItemType } from 'antd/lib/breadcrumb/Breadcrumb';
import { Link } from 'react-router';
import { PageURL } from 'shared/constants';

interface PageLayoutProps {
  title: string | React.ReactNode;
  breadcrumbs?: ItemType[];
  actions?: React.ReactNode | React.ReactNode[];
  loading?: boolean;
  children: React.ReactNode;
}
const defaultBreadcrumbs = [
  {
    title: <Link to={PageURL.HOME}>Главная</Link>,
  }
]

export const PageLayout = ({ title, breadcrumbs = defaultBreadcrumbs, actions = null, loading = false, children }: PageLayoutProps) => {
  return (
    <>
      <Spin fullscreen spinning={loading} tip="Идёт загрузка" />
      <header>
        <Breadcrumb items={breadcrumbs} />
        <Flex justify="space-between" align="center">
          <h1>{title}</h1>
          <Flex gap="middle">{actions}</Flex>
        </Flex>
      </header>
      <div>{children}</div>
    </>
  );
};
