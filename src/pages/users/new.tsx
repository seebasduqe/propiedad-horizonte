import {ChangeEvent, FormEvent, useState, useEffect} from "react";
import {Persona} from "../../interfaces/Persona";
import Index from "../../components/layout";
import {useRouter} from "next/router";
import {router} from "next/client";
import {useActualizarPersonaMutation, useCrearPersonaMutation} from "../redux/features/users/personaApiSlice";

const initialState = {
    cedula: '',
    nombre: '',
    no_celular: '',
};


export default function NewPage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {push} = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [persona, setPersona] = useState<Persona>(initialState);

    const idPatch : string | any = router.query.id;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [crearPersona] = useCrearPersonaMutation();
    const [actualizarPersona] = useActualizarPersonaMutation();

    const handleChange = ({target: {name, value}} : ChangeEvent<HTMLInputElement>) => {
        setPersona({...persona, [name] : value});
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if(typeof router.query.id === "string") {
                const data = {id: router.query.id, persona: persona}
                await actualizarPersona(data); await push(`/`); }
            else {
                await crearPersona(persona); await push(`/`);
            }
        } catch (error){
            console.log(error);
        }
    }

    const cargarPersona = async (id : string) => {
        const res = await fetch('http://localhost:3000/api/personas/' + id);
        const personaBack = await res.json();
        setPersona(personaBack);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
                if (typeof idPatch === "string") cargarPersona(idPatch);
        }, [idPatch]
    );

    return (
        <Index>
        <div className="flex justify-center items-center h-full">
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <h1 className="text-3xl text-gray-500 mb-7">
                    {router.query.id ? "Actualizacion de usuario " + persona.nombre : "Crear usuario"}
                </h1>

                <div className="md:flex md:items-center mb-6">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           htmlFor="inline-full-name">
                        Cedula:
                    </label>
                    <input
                        type="text"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Digite aqui su cedula"
                        value={persona.cedula}
                        name="cedula"
                        onChange={handleChange}
                    />
                </div>


                <div className="md:flex md:items-center mb-6">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           htmlFor="inline-full-name">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder= "Escriba aqui su nombre"
                        value={persona.nombre}
                        name="nombre"
                        onChange={handleChange}
                    />
                </div>

                <div className="md:flex md:items-center mb-6">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           htmlFor="inline-full-name">
                        No celular:
                    </label>
                    <input
                        type="text"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        value= {persona.no_celular}
                        placeholder= "Digite aqui su numero celular"
                        name="no_celular"
                        onChange={handleChange}
                    />
                </div>

                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    {router.query.id ? "actualizar" : "salvar"}
                </button>
            </form>
        </div>
        </Index>
    );
}