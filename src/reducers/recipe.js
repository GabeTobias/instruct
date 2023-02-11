import { createSlice } from "@reduxjs/toolkit";

import { loadRecipes, loadRecipe, addRecipe } from "../actions/recipes"

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: {},
    current: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadRecipes.fulfilled, (state, actions) => {
      return {
        ...state,
        recipes: actions.payload
      }
    });
    builder.addCase(loadRecipe.fulfilled, (state, actions) => {
      return {
        ...state,
        current: actions.payload
      }
    });
  }
});

export default recipeSlice;