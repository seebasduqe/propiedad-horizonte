import {Persona} from "../../interfaces/Persona";

interface Props {
    personas : Persona[]
}


export default function Personas ({personas} : Props)  {
    return (
        <div>
            <h1>Lista de Personas</h1>

                <div className="p-5 h-screen bg-gray-100">
                    <h1 className="text-xl mb-2"> Lista de personas </h1>
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Cedula</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">nombre</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">celular</th>
                        </tr>
                        </thead>
                        <tbody>
                            {Object.keys(personas).map((key: any) =>
                                <tr key={personas[key].cedula}>
                                    <td>{personas[key].cedula}</td>
                                    <td>{personas[key].nombre}</td>
                                    <td>{personas[key].no_celular}</td>
                                    <td>
                                        <button className="bg-indigo-500 px-4 py-2 text-white rounded-lg">Editar</button>
                                        <button className="bg-red-500 px-4 py-2 text-white rounded-lg">Eliminar</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

        </div>
    );
};

export const getServerSideProps = async() => {

    const res= await fetch('http://localhost:3000/api/personas');
    const personas = await res.json();

    return {
        props: {
            personas : personas
        }
    };
};