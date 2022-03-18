import {createSlice} from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface Prospect {
  name: string,
  mail: string,
  gender: 'Agender' | 'Bigender' | 'Female' | 'Genderfluid' | 'Genderqueer' | 'Male' | 'Non-binary' | 'Polygender' 
  birthdate: Date,
  age: number
}

const initialState = [] as Prospect[]

const prospectSlice = createSlice({
  name: 'prospect',
  initialState,
  reducers: {
    prospectListAdded(state, action) {
      console.log(action.payload)
      Object.keys(action.payload).forEach(elm => {
          state.push(action.payload[elm])
      });
    }
  }
})

export const { prospectListAdded } = prospectSlice.actions

export const  prospectList = (state: RootState) => state.prospect.values

export default prospectSlice.reducer