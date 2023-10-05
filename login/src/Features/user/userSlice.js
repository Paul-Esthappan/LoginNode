import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState : {userdata:[]} ,
    reducers: {
        userLogin: (state, action) => {
            state.userdata.push(action.payload)
        },
        userLogout: (state, action) => {
            state.userdata= []
            
        }
    }
})

export default userSlice.reducer
export const {userLogin, userLogout} = userSlice.actions