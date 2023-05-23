import React from 'react';
import './PurchaseOrderCard.scss';

interface PurchaseOrderCardProps {
  order: any;
}

const PurchaseOrderCard: React.FC<PurchaseOrderCardProps> = ({ order }) => {
  return (
    <div className="purchase-order-card">
      <h3>{order.name}</h3>
      <p>Order Date: {order.order_date}</p>
      <p>Vendor: {order.vendor_name}</p>
      <p>Status: {order.status}</p>
    </div>
  );
};

export default PurchaseOrderCard;
