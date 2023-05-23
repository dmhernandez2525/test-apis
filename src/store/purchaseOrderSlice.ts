import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PurchaseOrder } from '../pages/Dashboard/Dashboard';

// Define the state shape for the purchase orders
interface PurchaseOrderState {
  orders: PurchaseOrder[];
}

// Set the initial state for the purchase orders
const initialState: PurchaseOrderState = {
  orders: [],
};

// Create a purchase order slice, defining actions and reducers
const purchaseOrderSlice = createSlice({
  name: 'purchaseOrder',
  initialState,
  reducers: {
    // Action to update the purchase orders in the state
    updatePurchaseOrders: (state, action: PayloadAction<PurchaseOrder[]>) => {
      state.orders = action.payload;
    },
  },
});

// Export the actions to be used in other parts of the application
export const { updatePurchaseOrders } = purchaseOrderSlice.actions;

// Export the reducer to be used in the store configuration
export default purchaseOrderSlice.reducer;
