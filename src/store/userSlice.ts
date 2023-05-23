import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of a user object
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the state shape for the user information
interface UserState {
  user: User | null;
}

// Set the initial state for the user information
const initialState: UserState = {
  user: null,
};

// Create a user slice, defining actions and reducers
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the user information in the state
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

// Export the actions to be used in other parts of the application
export const { setUser } = userSlice.actions;

// Export the reducer to be used in the store configuration
export default userSlice.reducer;
