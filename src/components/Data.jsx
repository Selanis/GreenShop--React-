import './styles.scss';
import './Data.scss';
import React from 'react';
// import $ from 'jquery';
import {useState, useEffect} from 'react';
import { API_KEY, API_URL } from './config.jsx'
import { Preloader } from './Preloader.jsx'
import { Good } from './Good.jsx'

function Data() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(false)
        })
        .catch(error => console.log('error', error));
        
    }, []);

    return (
        <section>
            <div className="data" style={{minHeight: 'calc(100vh - 120px - 78px - 18px)'}}>
                {loading ? <Preloader /> : goods.slice(40, 60).map((item) => (
                    <Good object={item} {...item}/>
                )) }
            </div>
        </section>
    )
}

export { Data }