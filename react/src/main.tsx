import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/inicio/MainPage.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './pages/login/Login.tsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />
  },
  {
    path: '/login',
    element: <Login />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
