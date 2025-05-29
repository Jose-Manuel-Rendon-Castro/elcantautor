import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
<<<<<<< HEAD
import { useParams } from "react-router-dom";

interface Articulo {
    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    tipo: string;
    precio: number;
}
=======
import "../pruebaAPI/Articulos.css";

>>>>>>> vale_paginaPrincipal

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
<<<<<<< HEAD
        }
        fetchArticulos();
    }, [categoria, subcategoria]);

    if (cargando) return <p>Cargando...</p>;
=======
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
>>>>>>> vale_paginaPrincipal

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