import React, { useState } from 'react';
import './PurchaseOrderFilter.scss';

interface PurchaseOrderFilterProps {
  onFilter: (filter: string) => void;
}

export type FilterValues = {
  filter: string;
};

const PurchaseOrderFilter: React.FC<PurchaseOrderFilterProps> = ({
  onFilter,
}) => {
  const [filter, setFilter] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div className="purchase-order-filter">
      <input
        type="text"
        placeholder="Search by order name or vendor"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default PurchaseOrderFilter;
