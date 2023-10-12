import React from 'react';
import { Link } from 'react-router-dom';
import CoinRow from './CoinRow';

import Coin from '../routes/Coin';
import './Coins.css';

const Coins = (props) => {
    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Market Cap</p>
                </div>

                {props.coins.map((coin) => {
                    return (
                        <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id} >
                            <CoinRow coins={coin} />
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default Coins;