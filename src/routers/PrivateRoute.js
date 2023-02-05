import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute ({loggedIn, children}){
  return loggedIn ? children : <Navigate to="/" />;
}

const mapStateToProps = ({loggedIn}) => ({loggedIn});

export default connect(mapStateToProps)(PrivateRoute);