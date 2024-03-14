import './styles.scss';
import './Header.scss';
import React, { Component } from 'react';
import { Busket } from './Preview.jsx'
import $ from 'jquery';

function Header(props) {
    const goods = props.goods
    const [order, setOrder] = props.order;

    // function BusketShow() {
    //     $('body').html(
    //         <Busket goods={goods} order={[order, setOrder]} />
    //     )
    // }

    return (
        <header className="header">
            <div className="nav">
                <img src="logo-main.svg" />

                <ul>
                    <li>Домой</li>
                    <li>Каталог</li>
                    <li>Забота о скинах</li>
                    <li>Новости</li>
                </ul>

                {/* <button onClick={ BusketShow }>
                    <img src='logo-shop.svg' />
                    
                    {order.length != 0 ? <p className='busket-lenth'>{order.length}</p> : null}
                    
                </button> */}
            </div>
        </header>
    )
    
}

export { Header }