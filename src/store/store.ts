import { configureStore } from '@reduxjs/toolkit';
import purchaseOrderReducer from './purchaseOrderSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    purchaseOrder: purchaseOrderReducer,
    user: userReducer,
  },
});

export default store;
