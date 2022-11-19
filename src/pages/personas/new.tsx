import {ChangeEvent, FormEvent, useState, useEffect} from "react";
import {Persona} from "../../interfaces/Persona";
import Index from "../../components/layout";
import {useRouter} from "next/router";
import {router} from "next/client";
import axios from "axios";

const initialState = {
    cedula: ' ',
    nombre: ' ',
    no_celular: ' ',
};


export default function newPage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {push} = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [persona, setPersona] = useState<Persona>(initialState);

    const handleChange = ({target: {name, value}} : ChangeEvent<HTMLInputElement>) => {
        setPersona({...persona, [name] : value});
    }

    const crearPersona = async (persona: Persona) => {
        try {
            const {data} = await axios.post<Persona>(
                'http://localhost:3000/api/personas',
                persona,
                {
                    headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    }
                }
            )
        } catch (error){
            console.log(error);
        }
    }

    const actualizarPersona = async (id: string, persona : Persona) => {
        try{
            await fetch('http://localhost:3000/api/personas/'+ id,
                {method : "PUT", body : JSON.stringify(persona), headers: { "Content-Type": "application/json" }})
        } catch (error: any){
            console.log(error.message)
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(typeof router.query.id === "string") {
                await actualizarPersona(router.query.id, persona); push(`/`); }
            else {
                await crearPersona(persona); push(`/`); }
        } catch (error){
            console.log(error);
        }
    }

    const cargarPersona = async (id : any) => {
        const res = await fetch('http://localhost:3000/api/personas/' + id);
        const personaBack = await res.json();
        setPersona(personaBack);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(
        ()=> {
        if(typeof router.query.id === "string") cargarPersona(router.query.id)

        }, [router.query]
    );

    return (
        <Index>
        <div className="flex justify-center items-center h-full">
            <form className="bg-gray-200 p-10 h-2/4" onSubmit={handleSubmit}>
                <h1 className="text-3xl text-gray-500 mb-7">
                    {router.query.id ? "Actualizacion usuario " + persona.nombre : "Lista de Usuarios"}
                </h1>
                <input
                    type="text"
                    className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
                    placeholder="Digite aqui su cedula"
                    autoFocus
                    name="cedula"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
                    placeholder= "Escriba aqui su nombre"
                    autoFocus
                    name="nombre"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
                    placeholder= "Digite aqui su numero celular"
                    autoFocus
                    name="no_celular"
                    onChange={handleChange}
                />

                <button
                className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
                >
                    {router.query.id ? "actualizar" : "salvar"}
                </button>
            </form>
        </div>
        </Index>
    );
}