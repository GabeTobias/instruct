import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./recipeCard";

function LandingPage({ items, loggedIn }) {
  const navigate = useNavigate();

  function AddRecipe() {
    navigate('/create');
  }

  return (
    <Container className="mt-2 p-4">
      {/* <Card className="p-4 row"> */}
        <h2 className="mb-4">Recipes</h2>
        {Object.keys(items).map((key) =>
          <RecipeCard key={key} data={items[key]} />
        )}

        { loggedIn &&
          <div className="d-grid gap-2 mt-4">
            <Button variant="outline-primary" size="md" onClick={(e) => AddRecipe()}>
              Add Recipe
            </Button>
          </div>
        }
      {/* </Card> */}
    </Container>
  );
}

const connectProps = ({ loggedIn, recipe }) => {
  return {
    items: recipe.recipes,
    loggedIn
  }
};

export default connect(connectProps)(LandingPage);