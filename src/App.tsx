import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Layout } from './External/components/layout/Layout';
import { AppRouter } from './router/AppRouter';
import "./main.css";
import "./i18n"; // 🔥 Importar configuración de idiomas


const App: React.FC = () => {
  
  return (
    <Router>
      <Layout>
          <div className="mt-0"> {/* Espacio superior dentro de Routes */}
    
             
               <AppRouter />
          </div>
      </Layout>
    </Router>
  );
};

export default App;
