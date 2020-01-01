import React, { createContext, useState, useContext } from "react";

const OrderContext = createContext();


export const useOrderService = () => {
    return useContext(OrderContext);
};

let _id = 0;
const getId = () => _id++;
    
export function OrderService({ children }) {
    const [orderHistory, setOrderHistory] = useState([]);
    
    const createOrder = (sum) => ({
        date: new Date(),
        sum,
        id: getId()
    });

    const updateOrderHistory = (total) => {
        const order = createOrder(total);
        const newOrderHistory = [order, ...orderHistory];
        setOrderHistory(newOrderHistory);
    };

    
    const ctx = {
        orderHistory,
        updateOrderHistory
    };

    return (
      <OrderContext.Provider value={ctx}>
        {children}
      </OrderContext.Provider>
    );
  }