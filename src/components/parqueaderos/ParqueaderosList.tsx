import {Parqueadero} from "../../interfaces/Parqueadero";
import {AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {useState} from "react";

export interface Props {
    parqueaderos : Parqueadero[];
}


export const ParqueaderosList = ( {parqueaderos} : Props) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [idState, setIdState] = useState<number>(0);

    return (
        <div className="p-1 bg-gray-100">
            <table className="w-full">
                <thead className="bg-gray border-b-2 border-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">id_parqueadero</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">inmueble</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Quien lo usa</th>
                </tr>
                </thead>

                <tbody>
                {parqueaderos.map((parqueadero : Parqueadero, key : number) =>
                    <tr key={parqueadero.id_parqueadero}>
                        <td>{parqueadero.id_parqueadero}</td>
                        <td>{parqueadero.id_inmueble}</td>
                        <td>{parqueadero.quien_lo_usa}</td>
                        <td>
                            <button
                                className="bg-indigo-500 px-4 py-2 text-white rounded-lg"
                            >
                                <AiOutlineEdit></AiOutlineEdit>
                            </button>
                            <button
                                className="bg-red-500 px-4 py-2 text-white rounded-lg"
                                onClick={() => {setShowModal(true); setIdState(parqueadero.id_parqueadero); console.log(idState)}}
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