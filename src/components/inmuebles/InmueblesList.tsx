import {useState} from "react";
import {useRouter} from "next/router";
import {Inmueble} from "../../interfaces/Inmueble";
import {AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Fill} from "react-icons/ri";

interface Props {
    inmuebles: Inmueble[];
}

export const InmueblesList  = ( {inmuebles= []} : Props) => {


    const [showModal, setShowModal] = useState(false);
    const [idState, setIdState] = useState<string>(" ");

    const {push} = useRouter();

    return (
        <div className="p-1 bg-gray-100">
        <table className="w-full">
            <thead className="bg-gray border-b-2 border-gray-200">
            <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">id_inmueble</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">direccion</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">telefono</th>
            </tr>
            </thead>

            <tbody>
            {Object.keys(inmuebles).map((key: any) =>
                <tr key={inmuebles[key].id_inmueble}>
                    <td>{inmuebles[key].id_inmueble}</td>
                    <td>{inmuebles[key].direccion}</td>
                    <td>{inmuebles[key].telefono}</td>
                    <td>
                        <button
                            className="bg-indigo-500 px-4 py-2 text-white rounded-lg"
                        >
                            <AiOutlineEdit></AiOutlineEdit>
                        </button>
                        <button
                            className="bg-red-500 px-4 py-2 text-white rounded-lg"
                            onClick={() => {setShowModal(true); setIdState(inmuebles[key].id_inmueble)}}
                        >
                            <RiDeleteBin5Fill></RiDeleteBin5Fill>
                        </button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>);
}