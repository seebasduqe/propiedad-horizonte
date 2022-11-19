import {CgHome, CgBrowse} from "react-icons/cg";


export default function Navbar(){


    return (
        <div>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-700 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div className="flex items-center relative">
                        <button
                            className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                            type="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="bars"
                                className="w-6"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center relative">
                        Propiedad horizonte app
                        <div className="dropdown relative">
                            <p
                                className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
                                id="dropdownMenuButton1"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <CgHome></CgHome>
                            </p>
                        </div>
                        <div className="dropdown relative"> </div>

                    </div>

                    <div className="flex items-center relative">
                        Admin
                        <p className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4">
                            <CgBrowse></CgBrowse>
                        </p>
                    </div>
                </div>

            </nav>
        </div>
    );
}