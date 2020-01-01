import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { MainSection } from "ui/layout";
import { OrdersList } from "ui/OrdersList"
import { useOrderService } from "../services/order";


export function OrderHistory() {
    const { orderHistory } = useOrderService();
    const [ttr, setTtr] = useState(3);
    useEffect(() => {
        if (orderHistory.length === 0) {
            const timer = setTimeout(() => {
                setTtr(ttr - 1);
                }, 1000);
                return () => clearTimeout(timer);
            }
        } , [ttr, orderHistory.length]);
    if (ttr === 0) {
        return <Redirect to="/shop" />;
    }

    return (
        <MainSection heading="Order History">
            {(orderHistory.length === 0) ? 
            <h3>Redirecting to shopping page in {ttr}...</h3> 
            : <OrdersList ordersList={orderHistory} />}
        </MainSection>
    );
}

export default OrderHistory;