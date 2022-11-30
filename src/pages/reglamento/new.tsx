import {ChangeEvent, FormEvent, useState} from "react";
import {Reglamento} from "../../interfaces/Reglamento";

const initialState = {
    id_reglamento : '',
    titulo : '',
    descripcion : ''
}

const NewReglamento = () => {

    const [reglamento, setReglamento] = useState<Reglamento>(initialState);

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(reglamento);
    }

    const handleChange = ({target : {name, value} } : ChangeEvent<HTMLInputElement>) => {
        setReglamento({...reglamento, [name] : value})
    }

    return(
        <div className="flex justify-center items-center h-full">
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>

                <h1 className="text-3xl text-gray-500 mb-7">
                    Regitrar reglamento
                </h1>

                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Digite aqui el id del reglamento"
                name="id_reglamento"
                onChange={handleChange}
                />

                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    placeholder="Escriba el titulo de la norma"
                    name="titulo"
                    onChange={handleChange}
                />

                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 mb-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    placeholder="Escriba aqui la descripcion"
                    name="descripcion"
                    onChange={handleChange}
                />

                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    salvar
                </button>
            </form>
        </div>
    );
}

export default NewReglamento;