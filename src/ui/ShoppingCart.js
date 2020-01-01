import React, { useState } from "react";
import { MainSection } from "ui/layout";
import { ItemForm } from "ui/ItemForm";
import { ItemsList } from "ui/ItemsList";
import { Button } from "ui/common";
import { useOrderService } from "../services/order";


let _id = 0;
const getId = () => _id++;

export function ShoppingCart() {  
    const [itemsList, setItemsList] = useState([]);
    const [total, setTotal] = useState(0);
    const { updateOrderHistory } = useOrderService();
    
    const createItem = (title, price, quantity) => ({
        title,
        price,
        quantity,
        id: getId()
    });

    const addItem = (title, price, quantity) => {
        const item = createItem(title, price, quantity);
        const newItemsList = [item, ...itemsList];
        const newTotal = total + price*quantity;
        setItemsList(newItemsList); 
        setTotal(newTotal)
    };

    const deleteItem = (itemId) => {
        const item = itemsList.find(item => item.id === itemId)
        const newTotal = total - item.price*item.quantity;
        const newItemsList = itemsList.filter(item => item.id !== itemId);
        setItemsList(newItemsList);
        setTotal(newTotal);
    }

    const order = () => {
        updateOrderHistory(total);
        setItemsList([]);
        setTotal(0);
    }
    
    return (
        <MainSection heading="Shopping Cart">
            <ItemForm onAddItem={addItem}/> 
            <ItemsList itemsList={itemsList} onDelete={deleteItem}/> 
            <h3>Total: {total}</h3>  
            {(total!==0) ? 
                <Button onClick={order}>Order</Button> 
            :   <h3>Your shopping bag is empty:(</h3>}
        </MainSection>
  );
}

export default ShoppingCart;