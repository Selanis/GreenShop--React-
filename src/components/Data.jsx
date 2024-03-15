import './styles.scss';
import './Data.scss';
import './Header.scss'
import React from 'react';
// import $ from 'jquery';
import {useState, useEffect} from 'react';
import { Preloader } from './Preloader.jsx'
import { Good } from './Good.jsx'
import { Busket } from './Busket.jsx'
import $ from 'jquery';

function Data(props) {
    const goods = props.goods;
    const loading = props.loading;

    const [count, setCount] = useState(0)
    const [order, setOrder] = useState([]);
    const [objIndex, setIndex] = useState(null)

    if (order.order != undefined) {
        setOrder(order.order)
    }

    return (
        <React.Fragment>
            <header className="header">
                <div className="nav">
                    <img src="logo-main.svg" />

                    <ul>
                        <li>Домой</li>
                        <li>Каталог</li>
                        <li>Забота о скинах</li>
                        <li>Новости</li>
                    </ul>

                    <button>
                        <img src='logo-shop.svg' />
                        
                        {order.length != 0 ? <p className='busket-lenth'>{order.length}</p> : null}
                        
                    </button>
                </div>
            </header>

            <Busket order={order} setOrder={(arr) => { setOrder(arr) }} />

            <section>
                <div className="data" style={{minHeight: 'calc(100vh - 120px - 78px - 18px)'}}>
                    {loading ? <Preloader /> : goods.slice(70, 90).map((item) => (
                        <Good item={item} order={order} setOrder={(arr) => { setOrder(arr) }} />
                    )) }
                </div>
            </section>
        </React.Fragment>
        
    )
}

export { Data }