import { IUser } from '../../models/users';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('user/getAll', async (limit: number, thunkAPI) => {
  try {
    const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});
