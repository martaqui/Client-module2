import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

function ChangeTitleOnVisibility() {
  const changeDocumentTitle = () => {
    document.title = document.hidden ? "Vuelve Porfi :(" : "PACO FIESTAS!";
  };
  useEffect(() => {
    document.addEventListener('visibilitychange', changeDocumentTitle);
    return () => {
      document.removeEventListener('visibilitychange', changeDocumentTitle);
    };
  }, []);
  return null;
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ChangeTitleOnVisibility />
      <App />
    </Router>
  </StrictMode>
);
