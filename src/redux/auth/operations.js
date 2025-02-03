import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://connections-api.goit.global";

const setToken = (state) => {
  const token = state.auth.token;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (userSignUp, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/users/signup`, userSignUp);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userLogin, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/users/login`, userLogin);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      const response = await axios.post(`${baseUrl}/users/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      setToken(getState());
      const response = await axios.get(`${baseUrl}/users/current`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
