import React from 'react';
import CoinRow from "./CoinRow";
import "./Coins.css"

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
                        <CoinRow coins={coin} key={coin.id} />
                    )
                })}
            </div>

        </div>
    )
}

export default Coins;