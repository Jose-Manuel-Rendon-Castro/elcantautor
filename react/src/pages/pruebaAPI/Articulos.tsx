import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import "../pruebaAPI/Articulos.css";

interface Articulo {
    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    tipo: string;
    precio: number;
}


const Articulos = () => {
    const { categoria, subcategoria } = useParams<{ categoria: string; subcategoria: string }>();
    const [articulos, setArticulos] = useState<Articulo[]>([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchArticulos = async () => {
            if (categoria && subcategoria) {
                try {
                    const res = await fetch(`http://localhost:3000/${categoria}/${subcategoria}`)
                    const data = await res.json();
                    setArticulos(data);
                }
                catch (err) {
                    console.error('No jalo', err)
                }
                finally {
                    setCargando(false)
                }
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
                {articulos.map((articulo: Articulo) => (
                    <li key={articulo.id}>
                        {articulo.descripcion} - ${articulo.precio}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Articulos;