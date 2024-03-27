import React, { useEffect } from "react";
import './Data.scss';
import './styles.scss';
import { useState } from 'react'
import $ from 'jquery';

function Good(props) {
    const item = props.item
    const background = item.granted[0].images.background
    const name = item.displayName
    const id = item.mainId
    const price = item.price.finalPrice
    const [order, setOrder] = useState(props.order)

    const [check, setCheck] = useState(props.order)

    const editGood = props.editGood
    const AddGood = props.AddGood


    return (
        <div className='data__item' id={item.mainId}>
            {
                background == null ? <div className="image" style={{background: `url('noImg.svg') center/cover no-repeat`}}></div> : <div className="image" style={{background: `url('${background}') center/cover no-repeat`}}></div>
            }

            <div className="text">
                <p>{item.displayName}</p>
                <h3>{item.price.finalPrice}₽</h3>

                {
                    order.find((itemOrder) => itemOrder.id === item.mainId) == undefined ? <button className="text__button" onClick={ () => AddGood({id, background, price, name}) }>Купить</button> : 
                    <div className="text__countButtons">
                        <button onClick={ () => editGood({operation: '-', id}) }>-</button>
                            <p>{ order.find((itemOrder) => itemOrder.id === item.mainId).count }</p>
                        <button onClick={ () => editGood({operation: '+', id}) }>+</button>
                    </div>
                }

            </div>
        </div>
    )
}

export { Good }