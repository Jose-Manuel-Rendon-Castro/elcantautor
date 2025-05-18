import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import "../pruebaAPI/Articulos.css";


const Articulos = () => {
    const [articulos, setArticulos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const categoria = 'Guitarras';
    const subcategoria = 'Electrico';

    useEffect(() => {
        const fetchArticulos = async () => {
            try {
                const res = await fetch(`http://localhost:3000/${categoria}/${subcategoria}`);
                const data = await res.json();
                setArticulos(data);
            }
            catch (err) {
                console.error('No jalo chale', err);
            }
            finally {
                setCargando(false)
            }
        };
        fetchArticulos();
    }, [categoria, subcategoria]);

    if (cargando) {
        return (
            <div className="spinner-container">
                <div className="music-loader">
                    <div className="note"></div>
                    <div className="note"></div>
                    <div className="note"></div>
                </div>
                <p>Cargando productos...</p>
            </div>
        );
    }

    return (
        <div>
            <Header></Header>
            <h1>Lista de articulos</h1>
            <ul>
                {articulos.map((articulo: any) => (
                    <li key={articulo.articulo_id}>
                        {articulo.descripcion} - ${articulo.precio}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Articulos;