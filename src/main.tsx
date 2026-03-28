import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'; // O './index.css' según el nombre que elijas
import "./i18n"; // Importar la configuración de idiomas
import App from './App.tsx';
import { AuthProvider } from './Auth/context/AuthContext.tsx';
import { NavegacionProvider } from './store/external/NavegacionContext';

import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <NavegacionProvider>
          <App />
        </NavegacionProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
