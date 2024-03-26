import React, { useEffect } from "react";
import './Data.scss';
import './styles.scss';
import { useState } from 'react'
import $ from 'jquery';

function Good(props) {
    const item = props.item
    const background = item.granted[0].images.background
    const [order, setOrder] = useState(props.order)

    

    const editGood = () => {

    }

    const AddGood = () => {
        const orderItem = {
            id: item.mainId,
            item: item,
            count: 1,
            price: item.price.finalPrice,
            name: item.displayName,
            background: background
        }

        setOrder(order.push(orderItem))

        console.log(order)
        console.log(order.find(itemOrder => itemOrder.id = item.mainId))
    }

    return (
        <div className='data__item' id={item.mainId}>
            {
                background == null ? <div className="image" style={{background: `url('noImg.svg') center/cover no-repeat`}}></div> : <div className="image" style={{background: `url('${background}') center/cover no-repeat`}}></div>
            }

            <div className="text">
                <p>{item.displayName}</p>
                <h3>{item.price.finalPrice}₽</h3>

                {
                    order.find(itemOrder => (itemOrder.id = item.mainId)) == undefined  ? <button className="text__button" onClick={ AddGood }>Купить</button> : 
                    <div className="text__countButtons">
                        <button onClick={ editGood }>-</button>
                            <p>1</p>
                        <button onClick={ editGood }>+</button>
                    </div>
                }

            </div>
        </div>
    )
}

// function Good(props) {
//     const item = props.item
//     const background = props.item.granted[0].images.background;
//     const name = props.item.displayName;
//     const price = props.item.price.finalPrice;
//     const id = props.item.mainId

//     const [order, setOrder] = useState(props.order)
//     let arr = props.order
//     const [objIndex, setIndex] = useState(null)

//     function AddGood() {
//             const obj = {
//                 id: item.mainId,
//                 item: item,
//                 count: 1,
//                 price: item.price.finalPrice,
//                 name: item.displayName,
//                 background: item.granted[0].images.icon_background
//             }

//             arr.push(obj);


//                 for (let i = 0; i < order.length; i++) {
//                     if (id === order[i].id) {
//                         setIndex(i)
//                     }
//                 }
            

//             setOrder(arr)
//             props.setOrder({order})
//             alert(`${item.displayName} добавлен в корзину!`)

            
        
//     }

//     function editGood(e) {
//         const operation = $(e.target).html()

//         switch (operation) {
//             case "+":
//                 arr[objIndex].count = arr[objIndex].count + 1;
//                 break
//             case "-":
//                 if (order[objIndex].count == 1) {
//                     arr.splice(arr[objIndex], 1);
//                     alert(`${item.displayName} удалён из корзины`)
//                 } else {
//                     arr[objIndex].count = arr[objIndex].count - 1;
//                 }
//                 break
//         }

//         setOrder(arr)
//         props.setOrder({order})
//     }

//     return (
//         <div className='data__item' id={id}>
//             {
//                 background == null ? <div className="image" style={{background: `url('noImg.svg') center/cover no-repeat`}}></div> : <div className="image" style={{background: `url('${background}') center/cover no-repeat`}}></div>
//             }

//             <div className="text">
//                 <p>{name}</p>
//                 <h3>{price}₽</h3>

//                 {
//                     order[objIndex] == undefined  ? <button className="text__button" onClick={ AddGood }>Купить</button> : 
//                     <div className="text__countButtons">
//                         <button onClick={ editGood }>-</button>
//                             <p>{arr[objIndex].count}</p>
//                         <button onClick={ editGood }>+</button>
//                     </div>
//                 }

//             </div>
//         </div>
//     )
// }

export { Good }