import React from "react";

export function Order ({ order }) {
    const date = order.date;
    const styledDate = `${date.getDate()}/${date.getMonth()+1}/${date.getUTCFullYear()}`;
    return (
        <li >{`Date: ${styledDate} Sum:${order.sum}`}</li>
    )
}
