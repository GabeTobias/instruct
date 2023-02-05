import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import NavBar from './components/navbar';
import LoginPage from "./components/login"
import LandingPage from "./components/landing"
import Recipe from "./components/recipe"
import Register from './components/register';
import PublicRoute from './routers/PublicRoute';
//import PrivateRoute from './routers/PrivateRoute';
import CreateRecipe from './components/create';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: 
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
  },
  {
    path: "/register",
    element: 
      <PublicRoute>
        <Register />
      </PublicRoute>
  },
  {
    path: "/create",
    element: 
      // <PrivateRoute>
        <CreateRecipe />
      // </PrivateRoute>
  },
  {
    path: "/recipe/:id",
    element: <Recipe />
  },
]);

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
