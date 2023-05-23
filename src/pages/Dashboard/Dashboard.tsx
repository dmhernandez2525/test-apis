// Outside Packages
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { Column } from 'react-table';

// Internal Modules
import PurchaseOrderList from '../../components/PurchaseOrderList';
import PurchaseOrderFilter from '../../components/PurchaseOrderFilter';
import { DataTable, VerticalNav } from '../../components';

// Helpers
import { magic } from '../../helpers/auth';
import { mockPurchaseOrders, filterOrders } from '../../data/mockData';

// Redux
import { updatePurchaseOrders } from '../../store/purchaseOrderSlice';

// Styles
import './Dashboard.scss';

export type PurchaseOrder = {
  orderNumber: string;
  project: string;
  status: string;
  vendor: string;
  poOwner: string;
  dateCreated: string;
  submittedBy: string;
};

// ====================
// Component
// ====================
const Dashboard: React.FC = () => {
  // ====================
  // State
  // ====================
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxOrders = useSelector((state: any) => state.purchaseOrder.orders);
  const [orders, setOrders] = useState<PurchaseOrder[]>(
    filterOrders(mockPurchaseOrders, 'All Orders')
  );
  // TODO: fix this ,it should probably be in a redux slice
  const [navTitle, setNavTitle] = useState('Orders');
  const [dataTableType, setDataTableType] = useState('All Orders');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');

  // ====================
  // Effects
  // ====================
  useEffect(() => {
    dispatch(updatePurchaseOrders(mockPurchaseOrders));
    setOrders(reduxOrders);
  }, [dispatch, reduxOrders]);

  useEffect(() => {
    const fetchData = async () => {
      const didToken = await magic.user.getIdToken();
      const response = await fetch('/api/protected', {
        headers: {
          Authorization: `Bearer ${didToken}`,
        },
      });

      if (response.ok) {
        const data = await response.text();
        setMessage(data);
      }
    };

    fetchData();
  }, []);

  // ====================
  // Handle Methods
  // ====================
  const handleCreateNewOrder = () => {
    navigate('/new-purchase-order');
  };

  const handleFilter = useCallback((newFilter: string) => {
    setFilter(newFilter);
  }, []);

  // ====================
  // Variables
  // ====================
  const columns = React.useMemo<Column<PurchaseOrder>[]>(
    () => [
      {
        Header: 'Order #',
        accessor: 'orderNumber',
      },
      {
        Header: 'Project',
        accessor: 'project',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Vendor',
        accessor: 'vendor',
      },
      {
        Header: 'PO Owner',
        accessor: 'poOwner',
      },
      {
        Header: 'Date Created',
        accessor: 'dateCreated',
      },
      {
        Header: 'Submitted By',
        accessor: 'submittedBy',
      },
    ],
    []
  );

  const dataTableInputButtons = useMemo(() => {
    // TODO: this needs to be updated to use the information in the redux store
    const typesDataTableInputTypes = [
      'All Orders',
      'RFQ Open',
      'RFQ Sent',
      'Purchase Order',
      'Closed Orders',
    ];

    return typesDataTableInputTypes.map((type, index) => {
      return (
        <div
          onClick={() => {
            setDataTableType(type);
            setOrders(filterOrders(mockPurchaseOrders, type));
          }}
          className={classnames({
            'dashboard__data-table-input-button': true,
            'dashboard__data-table-input-button-selected':
              type === dataTableType,
          })}
          key={`${type} ${index}`}
        >
          <div className="dashboard__data-input-type">{type}</div>
          <div className="dashboard__data-input-amount">
            {filterOrders(mockPurchaseOrders, type).length}
          </div>
        </div>
      );
    });
  }, [dataTableType]);
  // ====================
  // Return
  // ====================
  return (
    <div className="dashboard">
      <VerticalNav setNavTitle={setNavTitle} />
      <div className="dashboard__main">
        <div className="dashboard__main__top">
          <span className="dashboard__nav-title">{navTitle}</span>
          <div>
            <button>Search</button>
            <button>Filters</button>
            <button>Export</button>
            <button onClick={handleCreateNewOrder}>Create New Order</button>
          </div>
        </div>
        <div className="dashboard__data-table-input-button-wrapper">
          {dataTableInputButtons}
        </div>
        <DataTable<PurchaseOrder> columns={columns} data={orders} />
      </div>
    </div>
  );
};

export default Dashboard;
