import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>View Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order._id} | Book: {order.bookTitle} | Customer: {order.customerName} | Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewOrders;
