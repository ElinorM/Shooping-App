import React from "react";
import { Order } from "ui/Order";

export function OrdersList({ ordersList }) {
  return (
    <ul>
      {ordersList.map(order => (
        <Order
          key={order.id}
          order={order}
        />
      ))}
    </ul>
  );
}
