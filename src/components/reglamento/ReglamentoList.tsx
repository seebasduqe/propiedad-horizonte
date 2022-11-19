import {Reglamento} from "../../interfaces/Reglamento";
import {useState} from "react";
import {useRouter} from "next/router";
import {AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Fill} from "react-icons/ri";

interface Props {
    reglamentos : Reglamento[]
}

export const ReglamentoList = ({reglamentos} : Props) => {

    const [showModal, setShowModal] = useState(false);
    const [idState, setIdState] = useState<string>(" ");

    const {push} = useRouter();


    return(<div className="p-1 bg-gray-100">
        <table className="w-full">
            <thead className="bg-gray border-b-2 border-gray-200">
            <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">id_reglamento</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">titulo</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">descripcion</th>
            </tr>
            </thead>

            <tbody>
            {Object.keys(reglamentos).map((key: any) =>
                <tr key={reglamentos[key].id_reglamento}>
                    <td>{reglamentos[key].id_reglamento}</td>
                    <td>{reglamentos[key].titulo}</td>
                    <td>{reglamentos[key].descripcion}</td>
                    <td>
                        <button
                            className="bg-indigo-500 px-4 py-2 text-white rounded-lg"
                        >
                            <AiOutlineEdit></AiOutlineEdit>
                        </button>
                        <button
                            className="bg-red-500 px-4 py-2 text-white rounded-lg"
                            onClick={() => {setShowModal(true); setIdState(reglamentos[key].id_reglamento)}}
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