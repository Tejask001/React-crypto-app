import React from 'react'

const CoinRow = (props) => {
    return (
        <div className='coin-row'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='coin-symbol'>
                <img src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>₹ {props.coins.current_price.toLocaleString('en-IN')}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>₹ {props.coins.total_volume.toLocaleString('en-IN')}</p>
            <p className='hide-mobile'>₹ {props.coins.market_cap.toLocaleString('en-IN')}</p>
        </div>
    )
}

export default CoinRow