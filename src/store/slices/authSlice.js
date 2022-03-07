import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getRequest from '../../services/requests/getRequest'



export const verifyAuthToken = createAsyncThunk(
    'auth/verify',
    async (token) => {
        let response = ''
        try{
            await getRequest('/v1/user/verify-jwt/', {
                headers: {
                    'auth-token': token
                }
            })
            response = token
        }catch (e) {
            response = ''
        }

        return response
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        loading: true,
        userDb: {fullName:'', email:''}
    },
    reducers: {
        logout: (state) => {
            state.token = ''
            state.loading = false
            state.userDb = {fullName:'' ,email:''}
        },
        setUserDb:(state, action) => {
            state.userDb = {fullName:action.payload.fullName, email: action.payload.email}
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(verifyAuthToken.fulfilled, (state, action) => {
            state.token = action.payload
            state.loading = false
        })

        builder.addCase(verifyAuthToken.pending, (state, action) => {
            state.loading = true
            state.token = ''
        })
    },
})

export default authSlice.reducer

export const logoutAction = authSlice.actions.logout

export const authSelector = state => state.auth

export const setUserDbAction = authSlice.actions.setUserDb