import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div>
          <h2>Orders</h2>

          {orders.map((order) => (
            <div key={order._id}>
              <p>Stock: {order.name}</p>
              <p>Quantity: {order.qty}</p>
              <p>Price: ₹{order.price}</p>
              <p>Mode: {order.mode}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;