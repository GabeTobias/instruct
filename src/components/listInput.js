import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

import TextCancel from "./textCancel";

function ListInput({ itemList, header, itemName, updateEvent, placeholder }) {
  const [items, setItems] = useState(itemList);

  function changeItem(key, value) {
    let newItems = [...items];
    newItems[key] = value;
    setItems(newItems);
    updateEvent(newItems);
  }

  function addItem(value) {
    let newItems = [...items, value];
    setItems(newItems);
    updateEvent(newItems);
  }

  function deleteItem(key){
    let newItems = [...items];
    newItems.splice(key,1);
    setItems(newItems);
    updateEvent(newItems);
  }

  return (
    <Card className="mb-4">
      <Card.Body>
        <h6>{header}</h6>
        {items.map((item, key) =>
          <TextCancel 
            key={key}
            value={item}
            placeholder={placeholder}
            onChange={(value) => changeItem(key, value)}
            onDelete={() => deleteItem(key)}
          />
        )}
      </Card.Body>
      <Card.Footer>
        <Button size="sm" onClick={(e) => { addItem('') }}>Add {itemName}</Button>
      </Card.Footer>
    </Card>
  );
}

export default ListInput;