import Navbar from "../navbar";

export default function Index({children} : any) {
    return(
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};