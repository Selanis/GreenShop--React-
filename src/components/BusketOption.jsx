import React from "react";
import $ from 'jquery';
import { useState, useEffect } from 'react';

function BusketOption(props) {
    const orderItem = props.orderItem;
    const name = orderItem.name;
    const price = orderItem.price;
    const background = orderItem.background;
    let count = props.orderItem.count;

    const [order, setOrder] = useState(props.order)
    let orderArr = order;
    const [index, setIndex] = useState(null);

    useEffect(() => {
        for (let i = 0; i < order.length; i++) {
            if (order[i].id == orderItem.id) {
                setIndex(i, order[i]);
                break;
            }
        }
    })
    
    function BusketClick(event) {
        const operation = $(event.target).html()

        switch (operation) {
            case '+':
                orderArr[index].count = count + 1;
                count = count + 1
                break
            case '-':
                if (orderItem.count == 1) {
                    orderArr.pop(orderItem)
                    count = 0
                    alert(`${name} удалён из корзины`)
                } else {
                    orderArr[index].count = count - 1;
                    count = count - 1
                }
                break
        }

        setOrder(orderArr)
        props.setOrder({order})
    }

    function DeleteItem() {
        orderArr.pop(orderItem)
        alert(`${name} удалён из корзины`)
        count = 0
        props.setOrder({order})
    }



    return (
        <div className='busketList__item'>
            <div className="item-text">
                <img src={background} alt="icon-image" width="30px" height="30px"/>
                <p>{name}</p>
                <p>
                    <span>
                        {price}₽
                    </span>
                </p>
            </div>
            
            <div className='busketButtons'>
                <button onClick={ BusketClick }>-</button>
                <p>{count}</p>
                <button onClick={ BusketClick }>+</button>
                <button onClick={ DeleteItem } style={{background: 'none'}}>
                    <img src="Delete.svg" alt="removeObject" />
                </button>
            </div>
        </div>
    )    
}

export { BusketOption } 