import './articuloStyle.css'

interface ArticuloProps {
    marca?: string;
    modelo?: string;
    imagenURL?: string;
    precio?: number;
    existencias?: number;
}


function Card ({ marca = 'Marca no disponible', modelo = 'Modelo no disponible', imagenURL =  './././images/default-image.png', precio = 0, existencias = 0 }: ArticuloProps){
    const precioFormateado = precio < 0 ? `$${precio}` : 'Precio No Disponible' 
    const existenciasTexto = existencias < 0 ? `Existencias: ${existencias}` : 'No Disponibles'
    return(
        <div className="marco" id="marco">
            <h3 id='marca'>{marca}</h3>
            <h3 id='modelo'>{modelo}</h3>
            <img src={imagenURL} alt="Imagen de instrumento"/>
            <b id='precio'>{precioFormateado}</b>
            <b id='existencias'>{existenciasTexto}</b>
        </div>
    );
}

export default Card