import './styles.scss';
import './Data.scss';
import React, { Component } from 'react';
import $ from 'jquery';

class Data extends Component {
    state = {
        apiKey: '46086b20-ac10a08c-d2bdd200-b171b52e'
    }

    handleClickBuy = (data) => {
        localStorage.setItem(data.mainId, 1)
    }

    componentDidMount = async () => {
        $.ajax({
            url: `https://fortniteapi.io/v2/shop?lang=ru`,
            method: 'GET',
            headers: {
                accept: 'application/json', 
                Authorization: '46086b20-ac10a08c-d2bdd200-b171b52e'
                
            },
            
            beforeSend: function(xhr){
                let newContent = ``
                newContent += `
                    <div class="preloader">
                            <img class="preloader__logo" id="preloader" src="preloader.svg" width="50px" height="50px" />
                    </div>
                `
                $('.data').html(newContent)
            },
            success: function (data) {
                console.log(data)
                let newContent = ``
                for (let i = 50; i < 80; i++) {
                    if (localStorage.getItem(data.shop[i].mainId) == null) {
                        newContent += `
                            <div class='data__item'>
                                <div class="image" style="background: url('${data.shop[i].granted[0].images.background}') center/cover no-repeat;"></div>

                                <div class="text">
                                    <p>${data.shop[i].displayName}</p>
                                    <h3>${data.shop[i].price.finalPrice}₽</h3>
                                    <button class="text__button" >Купить</button>
                                </div>
                            </div>
                        `
                    } else {
                        newContent += `
                            <div class='data__item'>
                                <div class="image" style="background: url('${data.shop[i].granted[0].images.background}') center/cover no-repeat;"></div>

                                <div class="text">
                                    <p>${data.shop[i].displayName}</p>
                                    <h3>${data.shop[i].price.finalPrice}₽</h3>
                                    <div class="text__buttons">
                                        <button>-</button>
                                        <h3>${localStorage.getItem(data.shop[i].mainId != null)}</h3>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                }

                $('.data').html(newContent)
            }
        })
    }

    render() {
        return (
            <section>
                <div className="data" style={{minHeight: 'calc(100vh - 120px - 78px - 18px)'}}>

                </div>
            </section>
        )
    }
}

export default Data