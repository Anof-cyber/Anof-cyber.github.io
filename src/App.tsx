import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Routes from './routes';
import './styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;