import { configureStore } from '@reduxjs/toolkit'
import {personaApiSlice} from "./features/users/personaApiSlice";
import {inmuebleApiSlice} from "./features/inmuebles/inmuebleApiSlice";
import {propiedad_horizonteApiSlice} from "./features/propiedades_horizonte/propiedad_horizonteApiSlice";



export const store = configureStore({
    reducer: {
        [personaApiSlice.reducerPath] : personaApiSlice.reducer,
        [inmuebleApiSlice.reducerPath] : inmuebleApiSlice.reducer,
        [propiedad_horizonteApiSlice.reducerPath] : propiedad_horizonteApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(personaApiSlice.middleware)
            .concat(inmuebleApiSlice.middleware)
            .concat(propiedad_horizonteApiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch