import React from 'react'
import './Coins.css';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';


const CoinItem = (props) => {

  // const[page,setPage]=useState(1);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  

  return (
    <>
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
      
      
      {/* <Stack spacing={2}>
      <Pagination count={10} variant="outlined" /> */}
      {/* <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled /> */}
      {/* </Stack> */}
      </>
  )

}

export default CoinItem
