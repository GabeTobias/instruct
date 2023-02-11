import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadRecipes = createAsyncThunk("recipes/loadAll", async () => {
  let req = await fetch("http://localhost:8080/recipeAll", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  let data = await req.json();
  return data;
});

export const loadRecipe = createAsyncThunk("recipes/loadRecipe", async (id, thunkAPI) => {
  let req = await fetch(`http://localhost:8080/recipe/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  let data = await req.json();
  return data;
});

export const addRecipe = createAsyncThunk("recipes/addRecipe", async (recipe, thunkAPI) => {
  let body = JSON.stringify(recipe);
  let req = await fetch(`http://localhost:8080/newRecipe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body
  });

  let res = await req.json();

  thunkAPI.dispatch(loadRecipes());

  return recipe;
});
