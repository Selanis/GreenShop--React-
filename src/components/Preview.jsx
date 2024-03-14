import './styles.scss';
import './Preview.scss';
import React from 'react';
import { BusketOption } from './BusketOption.jsx';
import { useState, useEffect } from 'react';

function Busket(props) {
    const [finalPrice, setPrice] = useState(0);
    const [order, setOrder] = props.order;

    console.log(order)

    return (
        <section className="busket">
            <div className='busketList'>
                <button className='closeButton'>
                    <img src="close.svg" />
                </button>
                <h1 align='center'>{order.length}</h1>

                    {/* {order.map((item) => (
                        <BusketOption order={item}  totalPrice={[finalPrice, setPrice]} />
                    ))} */}

                <div className='price'>
                    <h2>Общая стоимость:</h2>
                    <p>{finalPrice}₽</p>
                </div>
            </div>
        </section>
    )
}

export { Busket }