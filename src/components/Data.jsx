import './styles.scss';
import './Data.scss';
import './Header.scss'
import React from 'react';
// import $ from 'jquery';
import {useState, useEffect} from 'react';
import { Preloader } from './Preloader.jsx'
import { Good } from './Good.jsx'
import { Busket } from './Busket.jsx'
import $ from 'jquery';

function Data(props) {
    const goods = props.goods;
    const loading = props.loading;

    const [count, setCount] = useState(0)
    const [order, setOrder] = useState([]);
    const [objIndex, setIndex] = useState(null)

    const [showBusket, setShowBusket] = useState(false);

    if (order.arr != undefined) {
        setOrder(order.arr)
    }

    function showModal() {
        setShowBusket(true)
    }

    const editGood = (el) => {
        console.log('ok')
        const operation = el.operation
        let arr = order
        const index = order.findIndex(i => el.id == i.id)
        

        switch (operation) {
            case '+':
                arr[index].count = arr[index].count + 1
                break
            case '-':
                if (arr[index].count > 1) {
                    arr[index].count = arr[index].count - 1
                } else {
                    alert(`${ arr[index].name } удалён из корзины`)
                    arr.splice(index, 1)
                }
                break
        }
        
        setOrder({ arr })
    }

    function AddGood(el) {
        const orderItem = {
            id: el.id,
            count: 1,
            price: el.price,
            name: el.name,
            background: el.background
        }

        alert(`${ el.name } добавлен в корзину`)
        let arr = order
        arr.push(orderItem)
        setOrder({ arr })
        
    }

    function deleteGood(el) {
        let arr = order
        const index = order.findIndex(i => el.id == i.id)

        alert(`${ arr[index].name } удалён из корзины`)
        arr.splice(index, 1)
        setOrder({ arr })
    }


    return (
        <React.Fragment>
        {
            showBusket ? <Busket order={order} setShowBusket={(show) => { setShowBusket(show) }} editGood={ editGood } deleteGood={ deleteGood }/> : null
        }
            <header className="header">
                <div className="nav">
                    <img src="logo-main.svg" />

                    <ul>
                        <li>Домой</li>
                        <li>Каталог</li>
                        <li>Забота о скинах</li>
                        <li>Новости</li>
                    </ul>

                    <button onClick={ showModal }>
                        <img src='logo-shop.svg' />
                        
                        {order.length != 0 ? <p className='busket-lenth'>{order.length}</p> : null}
                        
                    </button>
                </div>
            </header>

            

            <section>
                <div className="data" style={{minHeight: 'calc(100vh - 120px - 78px - 18px)'}}>
                    {loading ? <Preloader /> : goods.slice(70, 90).map((item) => (
                        <Good item={item} order={order} AddGood={ AddGood } editGood={ editGood } />
                    )) }
                </div>
            </section>
        </React.Fragment>
        
    )
}

export { Data }