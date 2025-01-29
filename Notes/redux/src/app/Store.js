import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../slices/Userslice';
const Store=configureStore({ reducer:{
             userinfo:userReducer,
    },
});
export default Store;