import './styles.scss';
import './Data.scss';
import './Header.scss'
import React from 'react';
// import $ from 'jquery';
import {useState, useEffect} from 'react';
import { Preloader } from './Preloader.jsx'
import { Good } from './Good.jsx'
import $ from 'jquery';

function Data(props) {
    const goods = props.goods;
    const loading = props.loading;

    console.log(props)

    const id = props.goods.mainId;
    const item = props.goods;
    const price = props.goods.price.finalPrice;
    const [count, setCount] = useState(0)
    const [order, setOrder] = useState(props.order);
    let arr = order;
    const [objIndex, setIndex] = useState(null)


    function AddGood() {
        if (count == 0) {
            const obj = {
                id: id,
                item: item,
                count: 1,
                price: price
            }

            arr.push(obj);

            setIndex(order.length - 1);
            setCount(count + 1);
            setOrder(arr)
            alert(`${props.item.displayName} добавлен в корзину!`)

        }
    }

    function editGood(e) {
        const operation = $(e.target).html()

        switch (operation) {
            case "+":
                setCount(count + 1);
                arr[objIndex].count = count + 1;
                break
            case "-":
                if (count == 1) {
                    arr.pop(arr[objIndex]);
                    alert(`${props.item.displayName} удалён из корзины`)
                    setCount(0)
                } else {
                    setCount(count - 1)
                    arr[objIndex].count = count - 1;
                }
                break
        }

        setOrder(arr)
    }

    return (
        <React.Fragment>
            <header className="header">
                <div className="nav">
                    <img src="logo-main.svg" />

                    <ul>
                        <li>Домой</li>
                        <li>Каталог</li>
                        <li>Забота о скинах</li>
                        <li>Новости</li>
                    </ul>

                    <button>
                        <img src='logo-shop.svg' />
                        
                        {order.length != 0 ? <p className='busket-lenth'>{order.length}</p> : null}
                        
                    </button>
                </div>
            </header>

            <section>
                <div className="data" style={{minHeight: 'calc(100vh - 120px - 78px - 18px)'}}>
                    {loading ? <Preloader /> : goods.slice(40, 60).map((item) => (
                        <Good item={item} editGood={editGood} AddGood={AddGood} count={count} />
                    )) }
                </div>
            </section>
        </React.Fragment>
        
    )
}

export { Data }