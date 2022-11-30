import {ChangeEvent, FormEvent, ReactElement, useEffect, useState} from "react";
import {Propiedad_horizonte} from "../../interfaces/propiedad_horizonte";
import {useActualizarPropiedad_horizonteMutation, useCrearPropiedad_horizonteMutation} from "../redux/features/propiedades_horizonte/propiedad_horizonteApiSlice";
import {useRouter} from "next/router";
import {router} from "next/client";

const initialState = {
    nit: '',
    razon_social: '',
    direccion: '',
    reglamento: ''
}

const NewPropiedad_horizonte = () : ReactElement => {

    const [propiedad_horizonte, setPropiedad_horizonte] = useState<Propiedad_horizonte>(initialState);

    const {push} = useRouter();

    const idPatch : string | any  = router.query.id;

    const [crearPropiedad_horizonte] = useCrearPropiedad_horizonteMutation();
    const [actualizarPropiedad_horizonte] = useActualizarPropiedad_horizonteMutation();

    const handleSubmit = ( e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            if(typeof idPatch === "string"){
                const data = {id : idPatch, propiedad_horizonte: propiedad_horizonte};
                actualizarPropiedad_horizonte(data);
                push('/');
            } else {
                crearPropiedad_horizonte(propiedad_horizonte);
                push('/');
            }
        } catch (error : any){
            console.log(error.message);
        }
    }

    const handleChange = ({ target : {name, value} } : ChangeEvent<HTMLInputElement>) => {
        setPropiedad_horizonte({...propiedad_horizonte, [name] : value});
    }

    const cargarPropiedad_horizonte = async (idPatch : string) => {
        const res = await fetch(`http://localhost:3000/api/propiedad_horizonte/${idPatch}`);
        const propiedad_horizonteBack = await res.json();
        setPropiedad_horizonte(propiedad_horizonteBack);
    }

    useEffect(
        () => {
            if(typeof idPatch === "string") cargarPropiedad_horizonte(idPatch);
        },
        [idPatch])


    return (
        <div className="flex justify-center items-center h-full">
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>

                <h1 className="text-3xl text-gray-500 mb-7">
                    {idPatch ? "Actualizar propiedad horizonte" + propiedad_horizonte.nit : "Registrar Propiedad horizonte"}
                </h1>

                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    placeholder="Digite el nit"
                    value={propiedad_horizonte.nit}
                    name="nit"
                    onChange={handleChange}
                />

                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    placeholder="Escriba el nombre o razon social"
                    value={propiedad_horizonte.razon_social}
                    name="razon_social"
                    onChange={handleChange}
                />

                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    placeholder="Escriba la direccion"
                    value={propiedad_horizonte.direccion}
                    name="direccion"
                    onChange={handleChange}
                />
                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    placeholder="digite el id del reglamento"
                    value={propiedad_horizonte.reglamento}
                    name="reglamento"
                    onChange={handleChange}
                />
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    {idPatch ? "Actualizar" : "Salvar"}
                </button>
            </form>
        </div>
    );
}

export default NewPropiedad_horizonte;