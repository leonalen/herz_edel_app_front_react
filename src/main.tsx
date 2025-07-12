import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'; // O './index.css' según el nombre que elijas
import "./i18n"; // Importar la configuración de idiomas
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async';
import { NavegacionProvider } from './store/external/NavegacionContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <NavegacionProvider>
        <App />
      </NavegacionProvider>
    </HelmetProvider>
  </StrictMode>,
)
