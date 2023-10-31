import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postMeal = createAsyncThunk(
  "users/postItem",
  async (data, thunkAPI) => {
    console.log("in post api", data);
    const config = {
      method: "post",
      url: "meal/create",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };
    const response = await axios(config);
    console.log("in api call", response);
    return response.data;
  }
);

export const getAvail = createAsyncThunk("users/getAvailList", async () => {
  const config = {
    method: "get",
    url: "available/list",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  console.log("in api call", response);
  return response.data;
});

export const getMealByDate = createAsyncThunk(
  "users/getMealByDate",
  async (data, thunkAPI) => {
    const url = "meal/meals";
    const response = await axios.get(url, {
      params: data,
    });
    console.log("in api call", response);
    return response.data;
  }
);

export const getAllMeals = createAsyncThunk("users/getAllMeals", async () => {
  const config = {
    method: "get",
    url: "meal/list",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  console.log("in api call", response);
  return response.data;
});
