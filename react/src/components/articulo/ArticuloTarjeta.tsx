import './articuloStyle.css'
import { useCatalog } from '../catalogo/CatalogoContext';

interface ArticuloProps {
    id: number;
    marca: string;
    modelo: string;
    descripcion: string;
    imagenURL: string;
    precio: number;
    existencias: number;
}

function Card({ id, marca, modelo, descripcion, imagenURL, precio, existencias }: ArticuloProps)
{
    const { addToCatalog } = useCatalog();

    const handleAdd = () => {
        addToCatalog({
            id,
            marca,
            modelo,
            descripcion,
            imagenURL,
            precio: precio.toString(), // convert number to string for consistency
            existencias: existencias.toString()
        });
    };

    return(
        <div id="marco">
            <h3 id='id'>{id}</h3>
            <h3 id='marca'>{marca}</h3>
            <h3 id='modelo'>{modelo}</h3>
            <h3 id='descripcion'>{descripcion}</h3>
            <img id='img' src={imagenURL} alt="Imagen de instrumento"/>
            <b id='precio'>{precio}</b>
            <b id='existencias'>{existencias}</b>
            <button id='btn' onClick={handleAdd}>Añadir al Catálogo</button>
        </div>
    );
}

export default Card