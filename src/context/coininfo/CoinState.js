import CoinContext from "./CoinContext";
import { useState } from "react";
const CoinState=(props)=>{
    
     const [coin, setcoin] = useState();
     const [listofcoins, setlistofcoins] = useState([]);

    return (
        <CoinContext.Provider value={{coin,setcoin,listofcoins,setlistofcoins}}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinState;