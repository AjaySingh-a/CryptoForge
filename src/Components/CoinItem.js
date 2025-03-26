import React from 'react';
import './Coins.css';

const CoinItem = ({ coins }) => {
  if (!coins) {
    return <p>Loading...</p>;
  }

  function numberWithCommas(x) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A";
  }

  return (
    <div className='coin-row'>
      <p>{coins.market_cap_rank ?? "N/A"}</p>
      <div className="img-symbol">
        <img src={coins.image || ""} alt="coin" />
        <p>{coins.symbol ? coins.symbol.toUpperCase() : "N/A"}</p>
      </div>
      <p>₹{numberWithCommas(coins.current_price)}</p>
      <p>{coins.price_change_percentage_24h ? coins.price_change_percentage_24h.toFixed(2) + "%" : "N/A"}</p>
      <p className='hide-mobile'>{numberWithCommas(coins.total_volume ? coins.total_volume.toString().slice(0, -6) : "0")}M</p>
      <p className='hide-mobile'>{numberWithCommas(coins.market_cap ? coins.market_cap.toString().slice(0, -6) : "0")}M</p>
    </div>
  );
};

export default CoinItem;
