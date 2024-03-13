import './styles.scss';
import './Header.scss';
import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {
    render() {
        return (
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
                    </button>
                </div>
            </header>
        )
    }
}

export default Header