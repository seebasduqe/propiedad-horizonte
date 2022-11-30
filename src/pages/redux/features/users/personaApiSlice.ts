import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Persona} from "../../../../interfaces/Persona";
import {HYDRATE} from 'next-redux-wrapper';

interface Personas {
    personas : Persona[]
}


// Define a service using a base URL and expected endpoints
export const personaApiSlice = createApi({
    reducerPath: 'personaApiSlice',
    extractRehydrationInfo(action, {reducerPath}) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: ['Personas'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (builder) => ({
        getPersonas: builder.query<Personas, void>({
            query: () => '/personas',
            providesTags: [{type: "Personas", id: "List"}]
        }),
        crearPersona: builder.mutation<Persona, Partial<Persona>>({
            query: (persona) => ({
                    url: `/personas`,
                    method: 'POST',
                    body : persona,
                }),
            invalidatesTags: [{type: "Personas", id: "List"}],
        }),
        actualizarPersona: builder.mutation<Persona, {id: string, persona: Partial<Persona>}>({
            query: ({id,persona}) => ({
                    url: `/personas/${id}`,
                    method: 'PUT',
                    body : persona
            }),
            invalidatesTags: [{type: "Personas", id: "List"}],
        }),
        borrarPersona: builder.mutation<{success: boolean; id: string}, string>({
            query : (id) => ({
                url: `/personas/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: "Personas", id: "List"}],
        })
    })
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPersonasQuery, useCrearPersonaMutation, useActualizarPersonaMutation, useBorrarPersonaMutation} = personaApiSlice;