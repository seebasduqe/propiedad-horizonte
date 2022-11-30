import {Vehiculo} from "../../interfaces/Vehiculo";
import {useState} from "react";
import {useRouter} from "next/router";
import {AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Fill} from "react-icons/ri";

export interface Props {
    vehiculos : Vehiculo[];
}

export const VehiculosList = ( {vehiculos} : Props) => {

    const [showModal, setShowModal] = useState(false);
    const [idState, setIdState] = useState<string>(" ");

    const {push} = useRouter();


    return (<div className="p-1 bg-gray-100">
            <table className="w-full">
                <thead className="bg-gray border-b-2 border-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">placa</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">dueño</th>
                </tr>
                </thead>

                <tbody>
                {Object.keys(vehiculos).map((key : any) =>
                    <tr key={vehiculos[key].placa}>
                        <td>{vehiculos[key].placa}</td>
                        <td>{vehiculos[key].dueño}</td>
                        <td>
                            <button
                                className="bg-indigo-500 px-4 py-2 text-white rounded-lg"
                            >
                                <AiOutlineEdit></AiOutlineEdit>
                            </button>
                            <button
                                className="bg-red-500 px-4 py-2 text-white rounded-lg"
                                onClick={() => {setShowModal(true); setIdState(vehiculos[key].placa)}}
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
