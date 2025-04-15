import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { placeOrder } from "../redux/orderSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleOrder = () => {
    if (cartItems.length > 0) {
      const orderData = {
        items: cartItems,
        totalPrice: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      };

      dispatch(placeOrder(orderData)); // Call API to place order
    } else {
      alert("Cart is empty!");
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id}>
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item._id))}>Remove</button>
          </div>
        ))
      )}
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default CartPage;
