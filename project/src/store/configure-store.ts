import { configureStore } from '@reduxjs/toolkit';
import { default as reducer } from './reducer';

export const store = configureStore({ reducer });

