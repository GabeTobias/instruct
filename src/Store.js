import { configureStore, combineReducers }  from "@reduxjs/toolkit"

import auth from "./reducers/auth"
import recipe from "./reducers/recipe"

function CreateStore() {
  const store = configureStore({
    reducer: combineReducers({
      loggedIn: auth.reducer,
      recipe: recipe.reducer
    })
  });

  return store;
}

export default CreateStore;