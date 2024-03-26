import './styles.scss';
import './Busket.scss';
import React from 'react';
import { BusketOption } from './BusketOption.jsx';
import { useState, useEffect } from 'react';

function Busket(props) {
    let finalPrice = 0;
    const order = props.order
    let arr = order;

    for (let i = 0; i < order.length; i++) {
        finalPrice += order[i].price * order[i].count
    }

    function hideModal() {
        props.setShowBusket(false);
    }


    props.setOrder(arr)

    return (
        <section className="busket">
            <div className='busketList'>
                <button className='closeButton' onClick={ hideModal }>
                    <img src="close.svg" />
                </button>
                <h1 align='center'>Корзина</h1>

                    {order.map((item) => (
                        <BusketOption orderItem={item} order={order} setOrder={(arr) => { props.setOrder(arr) }} />
                        
                    ))}

                <div className='price'>
                    <h2>Общая стоимость:</h2>
                    <p>{finalPrice}₽</p>
                </div>
            </div>
        </section>
    )
}

export { Busket }