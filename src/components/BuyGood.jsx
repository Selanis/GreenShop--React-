import React from "react";
import './Data.scss';
import './styles.scss';
import {useState, useEffect} from 'react';
import $ from 'jquery';

function BuyGood(props) {
    const id = props.item;
    const [count, setCount] = useState(localStorage.getItem(id))

    function AddGood() {
        if (localStorage.getItem(id) == null) {
            setCount(1);
            localStorage.setItem(id, 1);
            alert("Товар добавлен в корзину!")
        }
    }

    function editGood(e) {
        const operation = $(e.target).html()

        switch (operation) {
            case "+":
                setCount(count + 1);
                break
            case "-":
                if (count == 1) {
                    localStorage.removeItem(id)
                    alert("Товар удалён из корзины")
                    setCount(0)
                } else {
                    setCount(count - 1)
                    localStorage.setItem(id, count)
                }
                break
        }

        console.log(count)
    }

    if (localStorage.getItem(id) == null) {
        return (
            <button className="text__button" onClick={ AddGood }>Купить</button>
        )
    } else {
        return (
            <div className="text__countButtons">
                <button onClick={ editGood }>-</button>
                <p>{count}</p>
                <button onClick={ editGood }>+</button>
            </div>
        )
    }

}

export { BuyGood }