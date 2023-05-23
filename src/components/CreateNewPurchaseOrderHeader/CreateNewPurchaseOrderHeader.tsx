import React from 'react';
import { useNavigate } from 'react-router-dom';

import './CreateNewPurchaseOrderHeader.scss';

const CreateNewPurchaseOrderHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToOrders = () => {
    navigate('/dashboard');
  };

  return (
    <div className="my-component">
      <div
        onClick={handleBackToOrders}
        className="my-component__back-to-orders"
      >
        Back to Orders
      </div>
      <div className="my-component__content">
        <div className="my-component__columns">
          <div className="my-component__column my-component__column--1">
            <div className="my-component__order-total">Order Total: $--</div>
          </div>
          <div className="my-component__column my-component__column--2">
            <div className="my-component__submit">Submit</div>
          </div>
        </div>
      </div>
      <div className="my-component__new-purchase-order">New Purchase Order</div>
    </div>
  );
};

export default CreateNewPurchaseOrderHeader;
