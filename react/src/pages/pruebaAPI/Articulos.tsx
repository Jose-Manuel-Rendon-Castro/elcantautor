import { useEffect, useState } from "react";
import Header from "../../components/header/Header";



const Articulos = () => {
    const [articulos, setArticulos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/articulos')
            .then(response => response.json())
            .then(data => {
                setArticulos(data);
                setCargando(false);
            })
            .catch(error => {
                console.error('Error al obtener articulos', error);
                setCargando(false);
            })
    }, []);

    if (cargando) return <p>Cargando productos...</p>;

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