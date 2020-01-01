import React from "react";
import { noop } from "ui/common";

export function Item ({ item, onDelete = noop }) {
    return (
        <li onDoubleClick={ () => onDelete(item.id)}>Title: {item.title} Price:{item.price} Quantity:{item.quantity}</li>
    )
}
