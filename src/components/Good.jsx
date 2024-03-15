import React from "react";
import './Data.scss';
import './styles.scss';
import { useState } from 'react'
import $ from 'jquery';

function Good(props) {
    const item = props.item
    const background = props.item.granted[0].images.background;
    const name = props.item.displayName;
    const price = props.item.price.finalPrice;
    const [count, setCount] = useState(0)
    const id = props.item.mainId

    const [order, setOrder] = useState(props.order)
    let arr = order
    const [objIndex, setIndex] = useState(null)

    function AddGood() {

        
            const obj = {
                id: item.mainId,
                item: item,
                count: 1,
                price: item.price.finalPrice,
                name: item.displayName,
                background: item.granted[0].images.icon_background
            }

            arr.push(obj);

            setIndex(arr.length - 1);
            setOrder(arr)
            props.setOrder({order})
            alert(`${item.displayName} добавлен в корзину!`)
            
            setCount(1);
        
    }

    function editGood(e) {
        const operation = $(e.target).html()

        switch (operation) {
            case "+":
                setCount(count + 1);
                arr[objIndex].count = arr[objIndex].count + 1;
                break
            case "-":
                if (order[objIndex].count == 1) {
                    arr.pop(arr[objIndex]);
                    alert(`${item.displayName} удалён из корзины`)
                    setCount(0)
                } else {
                    setCount(count - 1)
                    arr[objIndex].count = arr[objIndex].count - 1;
                }
                break
        }

        setOrder(arr)
        props.setOrder({order})
    }

    return (
        <div className='data__item' id={id}>
            <div className="image" style={{background: `url('${background}') center/cover no-repeat`}}>

            </div>

            <div className="text">
                <p>{name}</p>
                <h3>{price}₽</h3>

                {
                    order[objIndex] == undefined ? <button className="text__button" onClick={ AddGood }>Купить</button> : 
                    <div className="text__countButtons">
                        <button onClick={ editGood }>-</button>
                            <p>{order[objIndex].count}</p>
                        <button onClick={ editGood }>+</button>
                    </div>
                }

            </div>
        </div>
    )
}

export { Good }