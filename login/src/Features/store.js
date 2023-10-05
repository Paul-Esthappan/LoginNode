import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Features/user/userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'


const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
    user: userReducer,
});

const persistReduce = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistReduce,
        
})


export default store