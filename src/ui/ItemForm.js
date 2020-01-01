import React, { useState } from "react";
import { Input, Button  } from "ui/common";


export function ItemForm( { onAddItem } ) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const updateTitle = e => {
        const title = e.target.value;
        setTitle(title);
    }

    const updatePrice = e => {
        const price = e.target.value;
        setPrice(price);
    }

    const updateQuantity = e => {
        const quantity = e.target.value;
        setQuantity(quantity);
    }

    const submit = e => {
        e && e.preventDefault();
        onAddItem(title, price, quantity);
        setTitle("");  
        setPrice("");
        setQuantity(""); 
    }

    return (
        <form onSubmit={submit}>
            <strong>Item:  </strong><Input
                type="text"
                placeholder="Please enter an Item"
                value={title}
                onChange={updateTitle}
                required
            />
            <strong>Price:  </strong><Input
                type="number"
                placeholder="Please enter a price"
                min="0"
                onChange={updatePrice}
                value={price}
                required
            />
            <strong>Quantity:  </strong><Input
                type="number"
                placeholder="Please enter a quantity"
                value={quantity}
                min="1"
                onChange={updateQuantity}
                required
            />
            <Button > Add</Button>
      </form>
  );
}

export default ItemForm;