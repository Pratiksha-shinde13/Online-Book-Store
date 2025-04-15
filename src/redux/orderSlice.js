import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Fetch Orders from Backend
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders/user/${userId}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to fetch orders");
      return data; // ✅ Must return an array
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    setOrders: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      return action.payload; // ✅ Update Redux with fetched orders
    });
  },
});

export const { addOrder, setOrders } = orderSlice.actions;
export default orderSlice.reducer;
