import './styles.scss';
import './Preview.scss';
import React, { Component } from 'react';
import $ from 'jquery';
import { BusketOption } from './BusketOption.jsx';
import {useState, useEffect} from 'react';
import { API_KEY, API_URL } from './config.jsx'

function Busket() {
    const [goods, setGoods] = useState([]);

    useEffect(function getGoods() {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", API_KEY);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(API_URL, requestOptions)
        .then(response => response.json())
        .then(data => {
            data.shop && setGoods(data.shop)
        })
        .catch(error => console.log('error', error));
        
    }, []);

    return (
        <section className="busket">
            <div className='busketList'>
            <h1 align='center'>Корзина</h1>

                <BusketOption data={goods} />

            </div>
        </section>
    )
}

export { Busket }