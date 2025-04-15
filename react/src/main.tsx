import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/inicio/MainPage.tsx'
import 'bootstrap/dist/css/bootstrap.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
