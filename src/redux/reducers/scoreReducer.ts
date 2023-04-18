import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ScoreType = number

interface ScoreState {
  points: ScoreType
}

const initialState: ScoreState = {
  points: 0
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setPoints: (state, action: PayloadAction<ScoreType>) => {
      state.points = action.payload
    }
  }
})

export const { setPoints } = scoreSlice.actions

export default scoreSlice.reducer
