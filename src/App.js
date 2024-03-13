import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header.jsx'
import Preview from './components/Preview.jsx'
import { Data } from './components/Data.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <React.StrictMode>
      <Header />
      <Preview />
      <Data />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
