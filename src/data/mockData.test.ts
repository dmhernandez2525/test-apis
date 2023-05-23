import {
  PurchaseOrder,
  generateMockPurchaseOrders,
  filterOrders,
  mockPurchaseOrders,
} from './mockData';

describe('generateMockPurchaseOrders', () => {
  it('should generate the specified number of mock purchase orders', () => {
    const numOrders = 50;
    const orders = generateMockPurchaseOrders(numOrders);
    expect(orders.length).toBe(numOrders);
  });
});

describe('filterOrders', () => {
  it('should return all orders when "All Orders" filter is used', () => {
    const allOrders = filterOrders(mockPurchaseOrders, 'All Orders');
    expect(allOrders.length).toBe(mockPurchaseOrders.length);
  });

  it('should return only orders with specific status', () => {
    const statusFilters: PurchaseOrder['status'][] = [
      'RFQ Open',
      'RFQ Sent',
      'Purchase Order',
      'Closed Orders',
    ];

    statusFilters.forEach((filter) => {
      const filteredOrders = filterOrders(mockPurchaseOrders, filter);
      filteredOrders.forEach((order) => {
        expect(order.status).toBe(filter);
      });
    });
  });

  it('should throw an error for invalid filter', () => {
    expect(() => filterOrders(mockPurchaseOrders, 'Invalid Filter')).toThrow(
      'Invalid filter provided'
    );
  });
});

export {};
