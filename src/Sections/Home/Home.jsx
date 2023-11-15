import Portada from "../Portada/Portada.jsx"
import ListaPeliculas from "../ListaPeliculas/ListaPeliculas.jsx"
import { Outlet } from "react-router-dom"
import Menu from "../../Components/Menu/Menu.jsx"

export default function Home() {


    return (
        <>
            <Menu />
            {/* Portada */}
           {/*  <Portada /> */}
            {/* Lista de pelis */}
            {/* <ListaPeliculas /> */}
            <Outlet />
            {/* Footer */}

        </>
    )
}


