import {ChangeEvent, FormEvent, ReactElement, useEffect, useState} from "react";
import {Inmueble} from "../../interfaces/Inmueble";
import {useCrearInmuebleMutation, useActualizarInmuebleMutation} from "../redux/features/inmuebles/inmuebleApiSlice";
import {useRouter} from "next/router";
import {router} from "next/client";

const initialState = {
    id_inmueble : '',
    direccion : '',
    telefono : '',
    categoria : '',
    propiedad_horizonte : '',
    propietario : '',
}


const NewInmueble = (): ReactElement => {

    const {push} = useRouter();

    const [inmueble, setInmueble] = useState<Inmueble>(initialState);
    const [idState, setIdState] = useState<string>('');

    const idPatch : string | any = router.query.id;

    const [crearInmueble] = useCrearInmuebleMutation();
    const [actualizarInmueble] = useActualizarInmuebleMutation();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInmueble({...inmueble, [e.target.name]: e.target.value});
    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            if(typeof idPatch === "string"){
                const data = {id : idPatch, inmueble : inmueble};
                actualizarInmueble(data);
                await push('/');
            } else {
                await crearInmueble(inmueble);
                await push('/');
            }
        } catch (error : any) {
            console.log(error.message);
        }

    }


    const cargarInmueble =  async (id : string) => {
        const res = await fetch('http://localhost:3000/api/inmuebles/' + id);
        const inmuebleBack = await res.json();
        setInmueble(inmuebleBack);
    }

    useEffect(() => {
        if(typeof idPatch === "string") cargarInmueble(idPatch);
    }, [idPatch] )




    return (
            <div className="flex justify-center items-center h-full">
                <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                    <h1 className="text-3xl text-gray-500 mb-7">
                        {idPatch ? "Actualizar " + inmueble.direccion : "Registrar inmueble"}
                    </h1>

                        <input
                            type="text"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            placeholder="Digite aqui el id del inmueble"
                            value={inmueble.id_inmueble}
                            name="id_inmueble"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            placeholder="Escriba aqui la direccion del inmueble"
                            value={inmueble.direccion}
                            name="direccion"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            placeholder="Digite aqui el telefono del inmueble"
                            value={inmueble.telefono}
                            name="telefono"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            placeholder="Escriba aqui la categoria a la cual pertenece el inmueble"
                            value={inmueble.categoria}
                            name="categoria"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            placeholder="Digite aqui el id de la propiedad horizonte"
                            value={inmueble.propiedad_horizonte}
                            name="propiedad_horizonte"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            placeholder="Digite aqui el id del propietario"
                            value={inmueble.propietario}
                            name="propietario"
                            onChange={handleChange}
                        />

                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        {idPatch ? "Actualizar" : "Salvar"}
                    </button>
                </form>
            </div>
    );
};

export default NewInmueble;
