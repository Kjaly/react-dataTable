import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';
import ThunkMiddleware from 'redux-thunk'

export default configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware:[ThunkMiddleware],
  devTools:true // по стандарту включен, но для наглядности написал вручную
});
