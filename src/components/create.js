import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import ListInput from "./listInput";
import { useState } from "react";

function CreateRecipe() {
  const [ingredients, setIngredients] = useState(['']);
  const [directions, setDirections] = useState(['']);

  return (
    <Container className="mt-2 px-4 pt-3 pb-4">
      <h3 className="mb-4">New Recipe</h3>
      <Card className="mb-4">
        <Card.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <h6>Title</h6>
            <Form.Control type="text" placeholder="Recipe Title" />
          </Form.Group>
          <Form.Group className="mb-0" controlId="exampleForm.ControlTextarea1">
            <h6>Description</h6>
            <Form.Control as="textarea" rows={3} placeholder="Describe your food" />
          </Form.Group>
        </Card.Body>
      </Card>

      <ListInput
        itemList={ingredients}
        updateEvent={setIngredients}
        header="Ingredients"
        itemName="Ingredient"
        placeholder="Ingredient Name"
      />

      <ListInput
        itemList={directions}
        updateEvent={setDirections}
        header="Directions"
        itemName="Step"
        placeholder="Step direction"
      />

      <Button variant="primary" type="submit" className="me-2">
        Submit
      </Button>
      <Button variant="secondary" type="submit">
        Cancel
      </Button>
    </Container>
  );
}

export default CreateRecipe;