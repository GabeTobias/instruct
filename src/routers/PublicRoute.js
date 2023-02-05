import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute ({loggedIn, children}){
  return loggedIn ? <Navigate to="/" /> : children;
}

const mapStateToProps = ({loggedIn}) => ({loggedIn});

export default connect(mapStateToProps)(PrivateRoute);