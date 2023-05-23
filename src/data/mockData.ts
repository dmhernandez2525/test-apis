export interface PurchaseOrder {
  orderNumber: string;
  project: string;
  status: 'RFQ Open' | 'RFQ Sent' | 'Purchase Order' | 'Closed Orders';
  vendor: string;
  poOwner: string;
  dateCreated: string;
  submittedBy: string;
}

export function generateMockPurchaseOrders(numOrders: number): PurchaseOrder[] {
  const statuses: PurchaseOrder['status'][] = [
    'RFQ Open',
    'RFQ Sent',
    'Purchase Order',
    'Closed Orders',
  ];
  const vendors: string[] = [
    'Vendor 1',
    'Vendor 2',
    'Vendor 3',
    'Vendor 4',
    'Vendor 5',
    'Vendor 6',
    'Vendor 7',
    'Vendor 8',
    'Vendor 9',
    'Vendor 10',
  ];
  const poOwners: string[] = [
    'Owner 1',
    'Owner 2',
    'Owner 3',
    'Owner 4',
    'Owner 5',
    'Owner 6',
    'Owner 7',
    'Owner 8',
    'Owner 9',
    'Owner 10',
  ];
  const users: string[] = [
    'User 1',
    'User 2',
    'User 3',
    'User 4',
    'User 5',
    'User 6',
    'User 7',
    'User 8',
    'User 9',
    'User 10',
  ];

  const mockPurchaseOrders: PurchaseOrder[] = [];

  for (let i = 1; i <= numOrders; i++) {
    const orderNumber = 'PO' + i;
    const project = 'Project ' + i;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const vendor = vendors[Math.floor(Math.random() * vendors.length)];
    const poOwner = poOwners[Math.floor(Math.random() * poOwners.length)];
    const dateCreated = getRandomDate(
      new Date(2023, 0, 1),
      new Date(2023, 3, 23)
    )
      .toISOString()
      .split('T')[0];
    const submittedBy = users[Math.floor(Math.random() * users.length)];

    mockPurchaseOrders.push({
      orderNumber,
      project,
      status,
      vendor,
      poOwner,
      dateCreated,
      submittedBy,
    });
  }

  return mockPurchaseOrders;
}

function getRandomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export function filterOrders(
  orders: PurchaseOrder[],
  filter: string
): PurchaseOrder[] {
  switch (filter) {
    case 'All Orders':
      return orders;
    case 'RFQ Open':
    case 'RFQ Sent':
    case 'Purchase Order':
    case 'Closed Orders':
      return orders.filter((order) => order.status === filter);
    default:
      throw new Error('Invalid filter provided');
  }
}

export const mockPurchaseOrders: PurchaseOrder[] =
  generateMockPurchaseOrders(100);
