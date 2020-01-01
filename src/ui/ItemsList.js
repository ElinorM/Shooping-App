import React from "react";
import { Item } from "ui/Item";

export function ItemsList({ itemsList, onDelete }) {
  return (
    <ul>
      {itemsList.map(item => (
        <Item
          key={item.id}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
