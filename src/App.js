import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
// import { Header } from './components/Header.jsx'
import { Busket } from './components/Busket.jsx'
import { Data } from './components/Data.jsx'
import Footer from './components/Footer.jsx'

import { API_KEY, API_URL } from './components/config.jsx'
import {useState, useEffect} from 'react';


function App() {
  const [order, setOrder] = useState([])
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "46086b20-ac10a08c-d2bdd200-b171b52e");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://fortniteapi.io/v2/shop?lang=ru", requestOptions)
      .then(response => response.json())
      .then((data) => {
        
        data.shop && setGoods(data.shop)
        setLoading(false)
      })
      .catch(error => console.log('error', error));  
  }, []);

  

  return (
    <React.StrictMode>
      {/* <Header goods={goods} order={[order, setOrder]} /> */}
      <Data goods={goods} loading={loading} order={[order, setOrder]}/>
      <Footer />
    </React.StrictMode>
  );
}

export { App };
