import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/inicio/MainPage.tsx'
import Login from './pages/login/Login.tsx'
import CrearCuenta from './pages/crearCuenta/CrearCuenta.tsx'
import Articulos from './pages/pruebaAPI/Articulos.tsx'

import 'bootstrap/dist/css/bootstrap.css'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/crear-cuenta',
    element: <CrearCuenta />
  },
  {
    path: '/prueba',
    element: <Articulos />
  },
  {
    path: '/:categoria/:subcategoria',
    element: <Articulos />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
