import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card"

function RecipeCard({ data }){
  const navigate = useNavigate();

  function abrev(text, max) {
    if(text.length > max){
      return text.substring(0,max) + '...'
    }
    return text;
  }

  function recipeAddress (){
    return `/recipe/${data.UUID}`
  } 

  return(
    <Card style={{ width: '18rem', float: 'left' }} className="me-4">
      <Card.Body>
        <Card.Img variant="top" src={data.Media[0]} className="mb-4" />
        <Card.Title>{data.Name}</Card.Title>
        <Card.Text className="mb-2">
          {abrev(data.Description, 80)}
        </Card.Text>
        <Card.Link variant="primary" href="#" onClick={ () => navigate(recipeAddress())} className="stretched-link">View</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;