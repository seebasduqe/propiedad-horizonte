import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HYDRATE} from "next-redux-wrapper";
import {Propiedad_horizonte, Propiedades_horizonte} from "../../../../interfaces/propiedad_horizonte";


export const propiedad_horizonteApiSlice = createApi({
    reducerPath: 'propiedad_horizonteApiSlice',
    extractRehydrationInfo(action, {reducerPath}) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: ['Propiedades_horizonte'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (builder) => ({
        getPropiedades_horizonte: builder.query<Propiedades_horizonte, void>({
            query: () => '/propiedad_horizonte',
            providesTags: [{type: "Propiedades_horizonte", id: "List"}]
        }),
        crearPropiedad_horizonte: builder.mutation<Propiedad_horizonte, Partial<Propiedad_horizonte>>({
            query: (propiedad_horizonte) => ({
                url: '/propiedad_horizonte',
                method: 'POST',
                body: propiedad_horizonte
            }),
            invalidatesTags: [{type: "Propiedades_horizonte", id:"List"}]
        }),
        actualizarPropiedad_horizonte: builder.mutation<Propiedad_horizonte, {id: string, propiedad_horizonte: Partial<Propiedad_horizonte>} >({
            query: ({id, propiedad_horizonte}) => ({
                url: `/propiedad_horizonte/${id}`,
                method: "PUT",
                body: propiedad_horizonte
            }),
            invalidatesTags: [{type: "Propiedades_horizonte", id:"List"}]
        }),
        borrarPropiedad_horizonte: builder.mutation<{success: boolean, id:string}, string>({
            query: (id) => ({
                url: `/propiedad_horizonte/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type: "Propiedades_horizonte", id:"List"}]
        })
    })
});

export const {useGetPropiedades_horizonteQuery, useCrearPropiedad_horizonteMutation, useActualizarPropiedad_horizonteMutation, useBorrarPropiedad_horizonteMutation} = propiedad_horizonteApiSlice;