import React from "react";
import './Data.scss';
import './styles.scss';
import { BuyGood } from './BuyGood.jsx'

function Good(props) {
    const background = props.granted[0].images.background;
    const price = props.price.finalPrice;
    const id = props.mainId;
    const name = props.displayName;

    return (
        <div className='data__item' id={id}>
            <div className="image" style={{background: `url('${background}') center/cover no-repeat`}}>

            </div>

            <div className="text">
                <p>{name}</p>
                <h3>{price}₽</h3>
                <BuyGood className="text__button" item={id}/>
                {/* <button className="text__button" >Купить</button> */}
            </div>
        </div>
    )
}

export { Good }