import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import menuCreationReducer from "./slices/menuCreationSlice"
import forgetPasswordReducer from "./slices/forgetPasswordSlice"
import createNewShopFormValueSlice from "./slices/createNewShopFormValueSlice";
import authReducer from "./slices/authSlice";

const RootReducer = combineReducers({
    count: counterReducer,
    menuCreation: menuCreationReducer,
    forgetPassword: forgetPasswordReducer,
    create_new_shop: createNewShopFormValueSlice,
    auth: authReducer
})


export default RootReducer
