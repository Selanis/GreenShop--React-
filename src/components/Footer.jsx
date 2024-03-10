import './styles.scss';
import './Footer.scss';
import React, { Component } from 'react';
import $ from 'jquery';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <h2>Разработчик</h2>
                    <h3>Полехова Екатерина Владимировна ТКБО-01-22</h3>
                </div>
            </footer>
        )
    }
}

export default Footer