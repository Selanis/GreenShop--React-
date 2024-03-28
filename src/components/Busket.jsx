import './styles.scss';
import './Busket.scss';
import React from 'react';
import { BusketOption } from './BusketOption.jsx';
import { useState, useEffect } from 'react';

function Busket(props) {
    let finalPrice = 0;
    const order = props.order

    for (let i = 0; i < order.length; i++) {
        finalPrice += order[i].price * order[i].count
    }

    function hideModal() {
        props.setShowBusket(false);
    }


    return (
        <section className="busket">
            <div className='busketList'>
                <button className='closeButton' onClick={ hideModal }>
                    <img src="close.svg" />
                </button>
                <h1 align='center'>Корзина</h1>

                <div className="busketOptions">
                    {order.map((item) => (
                        <div className='busketList__item'>
                            <div className="item-text">
                                {
                                    item.background == null ? <img src="favicon.svg" alt="icon-image" width="30px" height="30px"/> : <img src={item.background} alt="icon-image" width="30px" height="30px"/>
                                }
                                
                                <p>{item.name}</p>
                                <p>
                                    <span>
                                        {item.price}₽
                                    </span>
                                </p>
                            </div>
                            
                            <div className='busketButtons'>
                                <button onClick={ () => props.editGood({operation: '-', id: item.id}) }>-</button>
                                <p>{ item.count }</p>
                                <button onClick={ () => props.editGood({operation: '+', id: item.id}) }>+</button>
                                <button onClick={ () => props.deleteGood({id: item.id}) } style={{background: 'none'}}>
                                    <img src="Delete.svg" alt="removeObject" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='price'>
                    <h2>Общая стоимость:</h2>
                    <p>{finalPrice}₽</p>
                </div>
            </div>
        </section>
    )
}

export { Busket }