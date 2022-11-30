import {Evento} from "../../interfaces/Evento";
import {Parqueadero} from "../../interfaces/Parqueadero";
import {AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {useState} from "react";

interface Props {
    eventos : Evento[];
}


export const EventosList = ( {eventos} : Props ) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [idState, setIdState] = useState<number>(0);


    return(
        <div className="p-1 bg-gray-100">
            <table className="w-full">
                <thead className="bg-gray border-b-2 border-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">id</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">titulo</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">descripcion</th>
                </tr>
                </thead>

                <tbody>
                {eventos.map((evento : Evento, key : number) =>
                    <tr key={evento.id_evento}>
                        <td>{evento.id_evento}</td>
                        <td>{evento.titulo}</td>
                        <td>{evento.descripcion}</td>
                        <td>{evento.id_area}</td>
                        <td>
                            <button
                                className="bg-indigo-500 px-4 py-2 text-white rounded-lg"
                            >
                                <AiOutlineEdit></AiOutlineEdit>
                            </button>
                            <button
                                className="bg-red-500 px-4 py-2 text-white rounded-lg"
                                onClick={() => {setShowModal(true); setIdState(evento.id_evento); console.log(idState)}}
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