import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import ProspectSlice from '../components/prospect/ProspectSlice'



export function makeStore() {
  return configureStore({
    reducer: { prospect: ProspectSlice },
  })
}

const store = makeStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
