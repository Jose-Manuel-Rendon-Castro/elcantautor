import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import MainPage from './pages/inicio/MainPage.tsx'
import InstrumentsPage from './pages/instruments/InstrumentsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
  },
  {
    path: '/Instruments',
    element: <InstrumentsPage/>,
  },
  {
    path: '/Instruments/:category',
    element: <InstrumentsPage/>,
  },
  {
    path: '/Instruments/:category/:subcategory',
    element: <InstrumentsPage/>,
  },
  {
    path: '/Instruments/:category/:subcategory/:subsubcategory',
    element: <InstrumentsPage/>,
  }
]);  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
