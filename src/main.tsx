import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'; // O './index.css' según el nombre que elijas
import "./i18n"; // Importar la configuración de idiomas
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
        <App />
     </Provider>
  </StrictMode>,
)
