
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const data = JSON.stringify(user);
  const resp = await fetch('http://localhost:8080/auth/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data
  });

  const json = await resp.json();
  return json;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  return false;
});

export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  const data = JSON.stringify(user);
  const resp = await fetch('http://localhost:8080/auth/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data
  });

  const json = await resp.json();
  
  if(json.success){
    thunkAPI.dispatch(login(user));
  }

  return json;
});
