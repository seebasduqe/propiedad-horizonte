import {Propiedad_horizonte} from "../../interfaces/propiedad_horizonte";
import {useState} from "react";
import {useRouter} from "next/router";
import {AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {
    useBorrarPropiedad_horizonteMutation,
    useGetPropiedades_horizonteQuery
} from "../../pages/redux/features/propiedades_horizonte/propiedad_horizonteApiSlice";

interface Props {
    propiedades_horizonte : Propiedad_horizonte[]
}


export const Propiedad_horizonteList = () => {

    const [showModal, setShowModal] = useState(false);
    const [idState, setIdState] = useState<string>("");

    const {push} = useRouter();

    const {data, isLoading, error} = useGetPropiedades_horizonteQuery();
    const [borrarPropiedad_horizonte] = useBorrarPropiedad_horizonteMutation();

    const propiedades_horizonte : Propiedad_horizonte[] | any = data;

    const handleDelete = () => {
        setShowModal(false);
        borrarPropiedad_horizonte(idState);
    }

    return(
        <div>
            {showModal ?  (<>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Eliminar propiedad horizonte
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    Esta seguro de eliminar propiedad horizonte {idState} ?
                                </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleDelete}
                                >
                                    Si, eliminar
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    No, volver
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>) : null}
            <div className="p-1 bg-gray-100">
                <table className="w-full">
                    <thead className="bg-gray border-b-2 border-gray-200">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">nit</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">razon social</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">direccion</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">reglamento</th>
                    </tr>
                    </thead>

                    <tbody>
                    {propiedades_horizonte && Object.keys(propiedades_horizonte).map((key: any) =>
                        <tr key={propiedades_horizonte[key].nit}>
                            <td>{propiedades_horizonte[key].nit}</td>
                            <td>{propiedades_horizonte[key].razon_social}</td>
                            <td>{propiedades_horizonte[key].direccion}</td>
                            <td>{propiedades_horizonte[key].reglamento}</td>
                            <td>
                                <button
                                    className="bg-indigo-500 px-4 py-2 text-white rounded-lg"
                                    onClick={ () => push(`/propiedades_horizonte/edit/${propiedades_horizonte[key].nit}`) }
                                >
                                    <AiOutlineEdit></AiOutlineEdit>
                                </button>
                                <button
                                    className="bg-red-500 px-4 py-2 text-white rounded-lg"
                                    onClick={() => {setShowModal(true); setIdState(propiedades_horizonte[key].nit)}}
                                >
                                    <RiDeleteBin5Fill></RiDeleteBin5Fill>
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}