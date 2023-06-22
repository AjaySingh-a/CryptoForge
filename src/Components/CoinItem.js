import React,{useState} from 'react'
import './Coins.css'

const CoinItem = (props) => {

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  // const [trending, setTrending] = useState([]);
  // 
  // const items = trending.map((coin) => {
    // let profit = coin?.price_change_percentage_24h >= 0;
  
    // const profit =props.coins.price_change_percentage_24h > 0;

  return (
    <div className='coin-row'>
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coins.image} alt="" />  
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>₹{numberWithCommas(props.coins.current_price.toString())}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>{numberWithCommas(props.coins.total_volume.toString().slice(0, -6))}M</p>
      <p className='hide-mobile'>{numberWithCommas(props.coins.market_cap.toString().slice(0, -6))}M</p>   
       </div>
  )
// });
}

export default CoinItem
