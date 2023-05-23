import React from 'react';
import CreateNewPurchaseOrderHeader from '../../components/CreateNewPurchaseOrderHeader';
import OrderInformation from '../../components/OrderInformation';
import ProductDetails from '../../components/ProductDetails';

import './CreateNewPurchaseOrder.scss';

const CreateNewPurchaseOrder: React.FC = () => {
  return (
    <div className="create-purchase-order">
      <CreateNewPurchaseOrderHeader />
      <div className="create-purchase-order__main-content-wrapper">
        <OrderInformation />
        <ProductDetails />
      </div>
    </div>
  );
};

export default CreateNewPurchaseOrder;
