import {Inmueble} from "../../../../interfaces/Inmueble";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HYDRATE} from "next-redux-wrapper";


interface Inmuebles {
    inmuebles : Inmueble[]
}


export const inmuebleApiSlice = createApi({
    reducerPath : 'inmuebleApiSlice',
    extractRehydrationInfo(action, {reducerPath}) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: ['Inmuebles'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (builder) => ({
        getInmuebles: builder.query<Inmuebles, void>({
            query: () => '/inmuebles',
            providesTags: [{type: "Inmuebles", id: "List"}]
        }),
        crearInmueble: builder.mutation<Inmueble, Partial<Inmueble>>({
            query: (inmueble) => ({
                url: '/inmuebles',
                method: 'POST',
                body: inmueble
            }),
            invalidatesTags: [{type: "Inmuebles", id:"List"}],
        }),
        actualizarInmueble: builder.mutation<Inmueble, {id: string, inmueble: Partial<Inmueble>} >({
           query: ({id,inmueble}) => ({
               url: `/inmuebles/${id}`,
               method: 'PUT',
               body: inmueble
           }),
            invalidatesTags: [{type: "Inmuebles", id: "List"}],
        }),
        borrarInmueble: builder.mutation<{success: boolean, id:string}, string>({
            query: (id) => ({
                url: `/inmuebles/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type: "Inmuebles", id: "List"}]
        })
    })
});

export const {useGetInmueblesQuery, useCrearInmuebleMutation, useActualizarInmuebleMutation, useBorrarInmuebleMutation} = inmuebleApiSlice;