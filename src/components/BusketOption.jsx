import React from "react";
import $ from 'jquery';
import { useState, useEffect } from 'react';

function BusketOption(props) {
    // const id = props.data.mainId;
    // const [count, setCount] = useState(localStorage.getItem(id))
    // const name = props.data.displayName;
    // const background = props.data.granted[0].images.icon_background;
    // const price = props.data.price.finalPrice;

    // function setPricePlus() {
    //     props.totalPrice[1](props.totalPrice[0] + price)
    // }

    // function setPriceMinus(p) {
    //     props.totalPrice[1](props.totalPrice[0] - price)
    // }

    // function BusketClick(e) {
    //     const operation = $(e.target).html()
        

    //     switch (operation) {
    //         case "+":
    //             localStorage.setItem(id, count + 1)
    //             setCount(count + 1);
    //             setPricePlus()
    //             break
    //         case "-":
    //             if (count == 1) {
    //                 localStorage.removeItem(id)
    //                 alert("Товар удалён из корзины")
    //                 setCount(0)
    //             } else {
    //                 localStorage.setItem(id, count - 1)
    //                 setCount(count - 1)
    //             }
    //             setPriceMinus()
    //             break
    //     }
    // }
    
    // function BusketClick(e) {
    //     const operation = $(e.target).html()

    //     switch (operation) {
    //         case "+":
    //             localStorage.setItem(id, count + 1)
    //             setCount(count + 1);
    //             break
    //         case "-":
    //             if (count == 1) {
    //                 localStorage.removeItem(id)
    //                 alert("Товар удалён из корзины")
    //                 setCount(0)
    //             } else {
    //                 localStorage.setItem(id, count - 1)
    //                 setCount(count - 1)
    //             }
    //             break
    //     }
    // }

    // function DeleteObj() {
    //     localStorage.removeItem(id)
    //     alert("Товар удалён из корзины")
    // }
    
    // if (localStorage.getItem(id) !== null) {
    //     console.log(props)
        

    //     return (
    //         <div className='busketList__item'>
    //             <div className="item-text">
    //                 <img src={background} alt="icon-image" width="30px" height="30px"/>
    //                 <p>{name}</p>
    //                 <p>
    //                     <span>
    //                         {price}₽
    //                     </span>
    //                 </p>
    //             </div>
                
    //             <div className='busketButtons'>
    //                 <button onClick={ BusketClick }>-</button>
    //                 <p>{count}</p>
    //                 <button onClick={ BusketClick }>+</button>
    //                 <button style={{background: 'none'}} onClick={ DeleteObj }>
    //                     <img src="Delete.svg" alt="removeObject" />
    //                 </button>
    //             </div>
    //         </div>
    //     )
    // }
}

export { BusketOption } 