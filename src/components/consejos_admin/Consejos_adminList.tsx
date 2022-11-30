import {Consejo_admin} from "../../interfaces/Consejo_admin";
import {Parqueadero} from "../../interfaces/Parqueadero";
import {AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {useState} from "react";

interface Props {
    consejos_admin : Consejo_admin[];
}


export const Consejos_adminList = ( {consejos_admin} : Props ) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [idState, setIdState] = useState<number>(0);


    return (
        <div className="p-1 bg-gray-100">
            <table className="w-full">
                <thead className="bg-gray border-b-2 border-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">id cargo</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">cargo</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">nombre</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">año</th>
                </tr>
                </thead>

                <tbody>
                {consejos_admin.map((consejo_admin : Consejo_admin, key : number) =>
                    <tr key={consejo_admin.id_cargo}>
                        <td>{consejo_admin.id_cargo}</td>
                        <td>{consejo_admin.cargo}</td>
                        <td>{consejo_admin.cedula}</td>
                        <td>{consejo_admin.año}</td>
                        <td>
                            <button
                                className="bg-indigo-500 px-4 py-2 text-white rounded-lg"
                            >
                                <AiOutlineEdit></AiOutlineEdit>
                            </button>
                            <button
                                className="bg-red-500 px-4 py-2 text-white rounded-lg"
                                onClick={() => {setShowModal(true); setIdState(consejo_admin.id_cargo); console.log(idState)}}
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