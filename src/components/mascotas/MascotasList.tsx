import {Mascota} from "../../interfaces/Mascota";
import {useState} from "react";
import {useRouter} from "next/router";
import {AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Fill} from "react-icons/ri";

interface Props {
    mascotas : Mascota[];
}



export const MascotasList = ( {mascotas} : Props ) => {

    const [showModal, setShowModal] = useState(false);
    const [idState, setIdState] = useState<number>(0);

    const {push} = useRouter();

    return (<div className="p-1 bg-gray-100">
            <table className="w-full">
                <thead className="bg-gray border-b-2 border-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">id</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">nombre</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">dueño</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">tipo</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">raza</th>
                </tr>
                </thead>

                <tbody>
                { mascotas.map((mascota : Mascota , key  : number) =>
                    <tr key={mascota.id_mascota}>
                        <td>{mascota.id_mascota}</td>
                        <td>{mascota.nombre}</td>
                        <td>{mascota.dueño}</td>
                        <td>{mascota.tipo}</td>
                        <td>{mascota.raza}</td>
                        <td>
                            <button
                                className="bg-indigo-500 px-4 py-2 text-white rounded-lg"
                            >
                                <AiOutlineEdit></AiOutlineEdit>
                            </button>
                            <button
                                className="bg-red-500 px-4 py-2 text-white rounded-lg"
                                onClick={() => {setShowModal(true); setIdState(mascota.id_mascota);}}
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
