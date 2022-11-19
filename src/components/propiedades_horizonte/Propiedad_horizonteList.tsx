import {Propiedad_horizonte} from "../../interfaces/propiedad_horizonte";
import {useState} from "react";
import {useRouter} from "next/router";
import {AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Fill} from "react-icons/ri";

interface Props {
    propiedades_horizonte : Propiedad_horizonte[]
}


export const Propiedad_horizonteList = ({propiedades_horizonte} : Props) => {

    const [showModal, setShowModal] = useState(false);
    const [idState, setIdState] = useState<string>(" ");

    const {push} = useRouter();


    return(<div className="p-1 bg-gray-100">
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
                {Object.keys(propiedades_horizonte).map((key: any) =>
                    <tr key={propiedades_horizonte[key].nit}>
                        <td>{propiedades_horizonte[key].nit}</td>
                        <td>{propiedades_horizonte[key].razon_social}</td>
                        <td>{propiedades_horizonte[key].direccion}</td>
                        <td>{propiedades_horizonte[key].reglamento}</td>
                        <td>
                            <button
                                className="bg-indigo-500 px-4 py-2 text-white rounded-lg"
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
    );
}