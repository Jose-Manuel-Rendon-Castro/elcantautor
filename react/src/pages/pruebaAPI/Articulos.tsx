import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import "../pruebaAPI/Articulos.css";
import Card from "../../components/articulo/ArticuloTarjeta";

/*interface Articulo {
    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    tipo: string;
    precio: number;
}*/

interface Articulo {
    id: number;
    marca: string;
    modelo: string;
    descripcion: string;
    imagenURL: string;
    precio: number;
    existencias: number;
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
            <Header />
            <br></br><br></br><br></br><br></br>
            <div className="card-container">
                {articulos.map((articulo) => (
                    <Card
                        key={articulo.id}
                        id={articulo.id}
                        marca={articulo.marca}
                        modelo={articulo.modelo}
                        descripcion={articulo.descripcion}
                        imagenURL={articulo.imagenURL}
                        precio={articulo.precio}
                        existencias={articulo.existencias}
                    />
                ))}
            </div>
        </div>
    );
}

export default Articulos;