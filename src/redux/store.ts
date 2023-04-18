import { AnyAction, combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import scoreReducer from './reducers/scoreReducer'

const rootReducer: Reducer<any, AnyAction> = combineReducers({
  score: scoreReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({ reducer: rootReducer })
