// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DollarOutlined, LoginOutlined, PhoneOutlined, RocketOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { DollarOutlined, LoginOutlined, PhoneOutlined, RocketOutlined };

// ==============================|| MENU ITEMS - PAGES ||============================== //

  const pages: NavItemType = {
    id: 'group-pages',
    // title: <FormattedMessage id="pages" />,
  type: 'group',
  children: [
    // {
    //   id: 'orders',
    //   title: <FormattedMessage id="Orders" />,
    //   type: 'collapse',
    //   icon: icons.PhoneOutlined,
    //   children: [
    //     {
    //       id: 'orders-dashboard',
    //       title: "Dashboard",
    //       type: 'item',
    //       url: '/orders/dashboard'
    //     }
    //   ]
    // },
    {
      id: 'subscriptions',
      title: <FormattedMessage id="subscriptions" />,
      type: 'item',
      url: '/subscriptions',
    },
    {
      id: 'users',
      title: <FormattedMessage id="users" />,
      type: 'item',
      url: '/users',
    },
    {
      id: 'aws-credentials',
      title: <FormattedMessage id="aws-credentials" />,
      type: 'item',
      url: '/aws-credentials',
    },
    {
      id: 'orders',
      title: <FormattedMessage id="orders" />,
      type: 'item',
      url: '/orders',
    },
    {
      id: 'report',
      title: <FormattedMessage id="report" />,
      type: 'item',
      url: '/report',
    },
    {
      id: 'cache',
      title: <FormattedMessage id="cache" />,
      type: 'item',
      url: '/cache',
    },
    {
      id: 'notification',
      title: <FormattedMessage id="notification" />,
      type: 'item',
      url: '/notification',
    },
    {
      id: 'monitoring',
      title: <FormattedMessage id="monitoring" />,
      type: 'item',
      url: '/monitoring',
    },
    {
      id: 'settings',
      title: <FormattedMessage id="settings" />,
      type: 'item',
      url: '/settings',
    }

  ]
};

export default pages;
