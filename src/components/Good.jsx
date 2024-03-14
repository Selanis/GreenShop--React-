import React from "react";
import './Data.scss';
import './styles.scss';
import { useState } from 'react'
import $ from 'jquery';

function Good(props) {
    const background = props.item.granted[0].images.background;
    const name = props.item.displayName;
    const price = props.item.price.finalPrice;
    const count = props.count
    const id = props.item.mainId

    const editGood = props.editGood
    const AddGood = props.AddGood

    return (
        <div className='data__item' id={id}>
            <div className="image" style={{background: `url('${background}') center/cover no-repeat`}}>

            </div>

            <div className="text">
                <p>{name}</p>
                <h3>{price}₽</h3>

                {
                    count == 0 ? <button className="text__button" onClick={ AddGood }>Купить</button> : 
                    <div className="text__countButtons">
                        <button >-</button>
                            <p>{count}</p>
                        <button>+</button>
                    </div>
                }

            </div>
        </div>
    )
}

export { Good }