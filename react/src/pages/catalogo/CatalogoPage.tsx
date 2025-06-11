import React from 'react';
import { useCatalog } from '../../components/catalogo/CatalogoContext';
import Header from "../../components/header/Header";
import '../catalogo/CatalogoStyles.css';

export const Catalog: React.FC = () => {
    const { catalog, removeFromCatalog, clearCatalog } = useCatalog();

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <Header />
            <div className="catalog-container">
                                    <h2>Mi Catálogo</h2>
                                    <button onClick={handlePrint}>Imprimir</button>
                                    <button onClick={clearCatalog}>Limpiar Catálogo</button>
                                    <br></br>
                {catalog.map(item => (
                    <div key={item.id} className="catalog-item">
                        <h3>{item.marca} {item.modelo}</h3>
                        <img src={item.imagenURL} alt="Imagen de instrumento" />
                        <p>{item.descripcion}</p>
                        <p>Precio: {item.precio}</p>
                        <p>Existencias: {item.existencias}</p>
                        <button onClick={() => removeFromCatalog(item.modelo)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;