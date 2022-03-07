import {createSlice} from "@reduxjs/toolkit";

const CreateNewShopFormValueSlice = createSlice({
    name: 'create_new_shop',
    initialState: {
        hasVariants: false,
        fulfilmentType: 0,
        deliveryOption: {},
        pickupOption: {}
    },
    reducers: {
        changeValue: (state, {payload}) => {
            state[payload.name] = payload.value
        }
    }
})

export default CreateNewShopFormValueSlice.reducer

export const changeFormValueAction = CreateNewShopFormValueSlice.actions.changeValue
export const formValueSelector = state => state.create_new_shop

