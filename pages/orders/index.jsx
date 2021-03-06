import { useIntl } from 'react-intl';

import LoadingItem from '../../modules/common/components/LoadingItem';
import MetaTags from '../../modules/common/components/MetaTags';
import Footer from '../../modules/layout/components/Footer';
import Header from '../../modules/layout/components/Header';
import OrderList from '../../modules/orders/components/OrderList';
import useOrderList from '../../modules/orders/hooks/useUserOrderList';
import useRedirect from '../../modules/auth/hooks/useRedirect';

const Order = () => {
  const { orders, loading } = useOrderList();
  const intl = useIntl();
  useRedirect({ to: '/login', matchGuests: true, matchAnonymous: true });

  return (
    <>
      <MetaTags title={intl.formatMessage({ id: 'my_orders' })} />
      <Header />
      {loading ? <LoadingItem /> : <OrderList orders={orders} />}
      <Footer />
    </>
  );
};

export default Order;
