import './styles.scss';
import './Data.scss';
import React, { Component } from 'react';
import $ from 'jquery';

class Data extends Component {
    render() {
        return (
            <section>
                <div className="data" style={{minHeight: 'calc(100vh - 120px - 78px - 18px)'}}>
                    {/* <div className="data__preloader">
                    <img src="preloader.svg" />
                    </div> */}

                    <div className='data__item'>
                        <div className="image"></div>

                        <div className="text">
                            <p>Barberton Daisy</p>
                            <h3>$119.00</h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Data