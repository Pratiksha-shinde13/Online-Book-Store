import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchOrders } from "../redux/orderSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const user = useSelector((state) => state.auth.user); // Get user info

  useEffect(() => {
    if (user) {
      console.log("Fetching orders for user:", user._id);
      dispatch(fetchOrders(user._id));
    }
  }, [dispatch, user]);

  console.log("Orders from Redux:", orders); // Debugging log

  return (
    <div>
      <h2>My Orders</h2>
      {orders?.length === 0 ? (
        <p>No orders yet.</p>
      ) : Array.isArray(orders) ? (
        orders.map((order, index) => (
          <div key={index}>
            <h3>Order #{index + 1}</h3>
            <p>Total Price: ${order.totalAmount}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.bookId}>
                  {item.bookTitle} - ${item.price} (x{item.quantity})
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Loading orders...</p>
      )}
    </div>
  );
};

export default Orders;
