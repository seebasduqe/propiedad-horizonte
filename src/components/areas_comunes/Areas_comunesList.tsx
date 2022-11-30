import {Area_comun} from "../../interfaces/Area_comun";
import {AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {useState} from "react";

interface Props {
    areas_comunes : Area_comun[];
}

export const Areas_comunesList = ( {areas_comunes} : Props ) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [idState, setIdState] = useState<number>(0);

    return (
        <div className="p-1 bg-gray-100">
            <table className="w-full">
                <thead className="bg-gray border-b-2 border-gray-200">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">id</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">nombre</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">ubicacion</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">capacidad</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">horario</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">propiedad horizonte</th>
                    </tr>
                </thead>
                <tbody>
                {areas_comunes.map( (area_comun : Area_comun, key : number) =>
                    <tr key={area_comun.id_area}>
                        <td>{area_comun.id_area}</td>
                        <td>{area_comun.nombre_area_comun}</td>
                        <td>{area_comun.horario}</td>
                        <td>{area_comun.capacidad}</td>
                        <td>{area_comun.propiedad_horizonte}</td>
                        <td>
                            <button
                                className="bg-indigo-500 px-4 py-2 text-white rounded-lg"
                            >
                                <AiOutlineEdit></AiOutlineEdit>
                            </button>
                            <button
                                className="bg-red-500 px-4 py-2 text-white rounded-lg"
                                onClick={() => {setShowModal(true); setIdState(area_comun.id_area); console.log(idState)}}
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