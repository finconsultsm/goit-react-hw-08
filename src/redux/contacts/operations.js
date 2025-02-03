import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setToken = (state) => {
  const token = state.auth.token;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      setToken(thunkAPI.getState());
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Contacts not found!");
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      setToken(thunkAPI.getState());
      const response = await axios.post("/contacts", {
        name: name,
        number: number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Unable to add user! Please refresh the page."
      );
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      setToken(thunkAPI.getState());
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Unable to delete user! Please refresh the page."
      );
    }
  }
);
