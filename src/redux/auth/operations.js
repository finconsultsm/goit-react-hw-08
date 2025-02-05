import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userSignUp, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/users/signup`, userSignUp);
      setAuthHeader(response.data.token);
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
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/users/logout`, null);
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
      const token = getState().auth.token;
      setAuthHeader(token);
      const response = await axios.get(`${baseUrl}/users/current`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
