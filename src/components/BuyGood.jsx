import React from "react";
import './Data.scss';
import './styles.scss';
import {useState, useEffect} from 'react';

function BuyGood(props) {
    const id = props.id;
    const [count, setCount] = useState(localStorage.getItem(id))

    console.log(count)

    return (
        <button className="text__button" >Купить</button>
    )
}

export { BuyGood }