import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import "./main.css";
import "./i18n"; // 🔥 Importar configuración de idiomas


const App: React.FC = () => {
  
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
