import React from "react";



const BitCoinDisplay= ({currency})=>{
    // console.log(currency);

    return(
        <tr>
            <td className="img-name-td"><img src={currency.image} alt={currency.name} /><strong> {currency.name}</strong></td>
            <td className="symbol"><em>{currency.symbol}</em></td>
            <td>${currency.current_price}</td>
            <td>${currency.total_volume}</td>
            <td style={currency.price_change_percentage_24h<0 ? {color:"red"}: {color:"green"}}> {currency.price_change_percentage_24h }% </td>
            <td>Mkt Cap: ${currency.market_cap}</td>
        </tr>
    )
}

export default BitCoinDisplay