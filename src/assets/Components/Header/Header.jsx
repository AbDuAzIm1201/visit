import React from 'react';
import './Header.css'
import rasm from '../../../assets/a.svg'

const Header = () => {
    return (
        <div className='container'>
            <div className="ota">
            <img src={rasm} alt="" />
            <ul>
                <li>Как это работает</li>
                <li>Инструкции</li>
                <li>Продукты</li>
                <li>База</li>
                <li>База знаний </li>
                <li>О нас</li>
                <button className='btn'>Вход</button>
            </ul>
            </div>
         
        </div>
    );
}

export default Header;
