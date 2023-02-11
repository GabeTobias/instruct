import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import ListInput from "./listInput";
import { useState } from "react";
import { connect } from "react-redux"

import { addRecipe } from "../actions/recipes";

import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom";

function CreateRecipe({saveRecipe}) {
  const [Ingredients, setIngredients] = useState(['']);
  const [Directions, setDirections] = useState(['']);
  const [Media, setMedia] = useState(['']);
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');

  const navigate = useNavigate();

  function getData(){
    return {
      UUID: uuidv4(),
      Name,
      Description,
      Media,
      Ingredients,
      Directions
    };
  }

  function save(){
    let data = getData();
    saveRecipe(data);
    navigate('/');
  }

  return (
    <Container className="mt-2 px-4 pt-3 pb-4">
      <h3 className="mb-4">New Recipe</h3>
      <Card className="mb-4">
        <Card.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <h6>Title</h6>
            <Form.Control type="text" placeholder="Recipe Title" value={Name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-0" controlId="exampleForm.ControlTextarea1">
            <h6>Description</h6>
            <Form.Control as="textarea" rows={3} placeholder="Describe your food" value={Description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
        </Card.Body>
      </Card>

      <ListInput
        itemList={Ingredients}
        updateEvent={setIngredients}
        header="Ingredients"
        itemName="Ingredient"
        placeholder="Ingredient Name"
      />

      <ListInput
        itemList={Directions}
        updateEvent={setDirections}
        header="Directions"
        itemName="Step"
        placeholder="Step direction"
      />

      <ListInput
        itemList={Media}
        updateEvent={setMedia}
        header="Media"
        itemName="image"
        placeholder="URL..."
      />

      <Button variant="primary" type="submit" className="me-2" onClick={(e) => save()}>
        Submit
      </Button>
      <Button variant="secondary" type="submit">
        Cancel
      </Button>
    </Container>
  );
}

const mapPropsToDispatch = (dispatch) => ({
  saveRecipe: (recipe) => dispatch(addRecipe(recipe))
});

export default connect(undefined, mapPropsToDispatch)(CreateRecipe);