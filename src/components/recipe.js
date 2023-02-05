import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { loadRecipe } from "../actions/recipes";

import Carousel from "./carousel";

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

function Recipe({ data, load }) {
  let { id } = useParams();

  const carImgs = [
    "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
    "https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg",
    "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2022/cars/malibu/01-images/2022-malibu-1sp-gsk-colorizer.jpg?imwidth=960",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png",
    "https://www.volvocars.com/images/v/-/media/market-assets/us/applications/dotcom/images/homepage/local-content/2560-x-1096.jpg?h=1096&iar=0&w=2560"
  ];

  if(!data.Media)
  { 
    load(id);
    return (<div></div>); 
  }

  return (
    <div className="container mt-4">
      <Carousel images={data.Media} duration={4} />

      <h1>{data.Name}</h1>
      <p className="mb-5">{data.Description}</p>

      <Row>
        <Col className="pe-5" xs={8}>
          <h3 className="mb-3">Directions</h3>
          { data.Directions.map((step, index) => 
            <div key={index}>
              <h5>Step {index+1}</h5>
              <p>{step}</p>
            </div>
          ) }
        </Col>
        <Col>
          <h3 className="mb-3">Ingredients</h3>
          { data.Ingredients.map((step, index) => 
            <div key={index}>
              <p>{step}</p>
            </div>
          ) }
        </Col>
      </Row>
      <Card className="px-5 py-4 my-5">
        This is where the user thumbnail will be.
      </Card>
    </div>
  );
}

const mapStateToProps = ({ recipe }) => {
  return {
    data: recipe.current
  };
}

const mapDispatchToProps = (dispatch) => ({
  load: (uuid) => {
    dispatch(loadRecipe(uuid));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);