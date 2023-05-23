import React, { useCallback, useEffect } from 'react';
import { Odoo } from '../../helpers/odoo';
import useOdoo from '../../hooks/useOdoo';
import PurchaseOrderCard from '../PurchaseOrderCard';
import PurchaseOrderFilter from '../PurchaseOrderFilter';

interface PurchaseOrderListProps {
  filter: string;
}

const PurchaseOrderList: React.FC<PurchaseOrderListProps> = ({ filter }) => {
  const odooService = new Odoo(
    'https://your-odoo-instance.com/jsonrpc',
    'database',
    'username',
    'password'
  );
  const { data, isLoading, error, fetchData } = useOdoo<any>(
    odooService,
    'call'
  );

  const handleFilter = useCallback(
    (filter: string) => {
      fetchData({
        model: 'purchase.order',
        method: 'search_read',
        args: [],
        filter,
      });
    },
    [fetchData]
  );

  useEffect(() => {
    fetchData({ model: 'purchase.order', method: 'search_read', args: [] });
  }, [fetchData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <PurchaseOrderFilter onFilter={handleFilter} />
      {data &&
        data.map((order: any) => (
          <PurchaseOrderCard key={order.id} order={order} />
        ))}
    </div>
  );
};

export default PurchaseOrderList;
