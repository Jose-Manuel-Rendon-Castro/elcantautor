import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import Card from "../../components/articulo/ArticuloTarjeta";
import './ArticuloStyles.css'

interface Articulo {
    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    tipo: string;
    precio: number;
    marca?: string;
    modelo?: string;
    imagenURL?: string;
    existencias?: number;
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
        }
        fetchArticulos();
    }, [categoria, subcategoria]);

    if (cargando) return <p>Cargando...</p>;

    return (
        <div>
            <Header />
            <div id="background">
            <h1>Lista de artículos</h1>
            <div className="grid-container">
                {articulos.map((articulo) => (
                    <Card
                        key={articulo.id}
                        marca={articulo.marca ?? "Marca desconocida"}
                        modelo={articulo.modelo ?? articulo.nombre}
                        imagenURL={articulo.imagenURL}
                        precio={articulo.precio}
                        existencias={articulo.existencias}
                    />
                ))}
            </div>
            </div>
        </div>
    );
};

export default Articulos;