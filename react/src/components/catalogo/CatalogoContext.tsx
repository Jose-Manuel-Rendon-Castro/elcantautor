// CatalogContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of an Item
export interface CatalogItem {
    id: number;
    marca: string;
    modelo: string;
    descripcion: string;
    imagenURL: string;
    precio: string;
    existencias: string;
}

// Define the shape of the context value
interface CatalogContextType {
    catalog: CatalogItem[];
    addToCatalog: (item: CatalogItem) => void;
    removeFromCatalog: (itemModelo: string) => void;
    clearCatalog: () => void;
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

// Provider Props
interface CatalogProviderProps {
    children: ReactNode;
}

export function CatalogProvider({ children }: CatalogProviderProps) {
    const [catalog, setCatalog] = useState<CatalogItem[]>([]);

    const addToCatalog = (item: CatalogItem) => {
        if (!catalog.find(i => i.modelo === item.modelo)) {
            setCatalog ([...catalog, item]);   
        }
    };

    const removeFromCatalog = (itemModelo: string) => {
        setCatalog(catalog.filter(item => item.modelo !== itemModelo));
    };

    const clearCatalog = () => {
        setCatalog([]);
    };

    return (
        <CatalogContext.Provider value={{ catalog, addToCatalog, removeFromCatalog, clearCatalog }}>
            {children}
        </CatalogContext.Provider>
    );
}

export function useCatalog() {
    const context = useContext(CatalogContext);
    if (!context) {
        throw new Error("useCatalog must be used within a CatalogProvider");
    }
    return context;
}

