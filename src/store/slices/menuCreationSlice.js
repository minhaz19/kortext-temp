import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectedId: null,
    menuOptions: [{}, {}, {}, {}]
};

const menuCreationSlice = createSlice({
    name: "menuCreation",
    initialState: initialState,
    reducers: {
        addImage: (state, action) => {
            state.menuOptions[state.selectedId].img = action.payload;
            state.selectedId = null;
        },

        addName: (state, action) => {
            state.menuOptions[state.selectedId].name = action.payload;
        },

        addPrice: (state, action) => {
            state.menuOptions[state.selectedId].price = action.payload;

        },

        addOption: (state, action) => {
            state.menuOptions.push({});
        },

        removeOption: (state, action) => {
            return {
                ...state,
                menuOptions: state.menuOptions.filter(
                    (value, index) => index !== action.payload
                ),
            };
        },
        clearOptions: (state) => {
            state.menuOptions = [{}, {}, {}, {}]
        },

        selectedFieldId: (state, action) => {
            state.selectedId = action.payload;
        },

        removeSelectedFieldId: (state, action) => {
            state.selectedId = null;
        }
    },
});

export const {
    addImage,
    selectedFieldId,
    addName,
    addPrice,
    addOption,
    removeSelectedFieldId,
    removeOption,
    clearOptions
} = menuCreationSlice.actions;

export const selectMenuCreationState = (state) => state.menuCreation.menuOptions;
export default menuCreationSlice.reducer;
