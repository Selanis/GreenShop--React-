import React from "react";
import $ from 'jquery';
import { useState } from 'react'

function BusketOption(props) {
    function BusketClick(e) {
        let operation = $(e.target).html()

        switch (operation) {
            case "+":
                break;
        }
    }

    return (
        <div className='busketList__item'>
            <p>Товар</p>
            <div className='busketButtons'>
                <button onClick={ BusketClick }>-</button>
                <p>1</p>
                <button onClick={ BusketClick }>+</button>
            </div>
        </div>
    )


}

export { BusketOption } 