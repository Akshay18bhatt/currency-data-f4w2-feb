import React, {useState, useEffect} from "react";
import axios from "axios";
import BitCoinDisplay from "./Component/BitCoinDisplay";
import "./currency.css"

const App= ()=>{

    const [currencyData, setCurrencyData] = useState([]);
    // console.log(currencyData);
    useEffect(()=>{
        (
            async()=>{

            try{
                const responseData= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            // console.log(responseData);
                setCurrencyData(responseData.data);
            }
            catch(err){
                console.log(err);
            }
            
        })();
    },[])


    return(
        <div>
            <table>
            

                <tbody>
                    {
                        currencyData.map((currency)=>{
                            return(<BitCoinDisplay key={currency.id} currency={currency} />)
                        })
                    }
                </tbody>

        </table>
        </div>
    )
}

export default App