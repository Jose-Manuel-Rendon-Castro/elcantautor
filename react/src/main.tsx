import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/inicio/MainPage.tsx'
import Catalog from './pages/catalogo/CatalogoPage.tsx'
import Articulos from './pages/pruebaAPI/Articulos.tsx'
import { CatalogProvider } from './components/catalogo/CatalogoContext.tsx';

import 'bootstrap/dist/css/bootstrap.css'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />
  },
  {
  path: '/catalogo',
  element: <Catalog />
  },
  {
    path: '/:categoria/:subcategoria',
    element: <Articulos />
  },
  {
    path: '/:categoria/:subcategoria/:subsubcategoria',
    element: <Articulos />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <CatalogProvider>
    <RouterProvider router={router}/>
    </CatalogProvider>
  </StrictMode>,
)
