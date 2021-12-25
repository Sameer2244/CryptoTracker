import axios from "axios";
import '../styles/coinInfo.css'
import React, { useContext, useEffect, useState } from "react";
import CoinContext from "../context/coininfo/CoinContext";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const Coininfo = () => {
  const mdata = useContext(CoinContext);
  var options1 = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "4a5887dcb0msh2713e9a2401ff4cp1f6a17jsnd8afcb81a87c",
    },
  };
  useEffect(() => {
    axios
      .request(options1)
      .then(function (response) {
        console.log(response.data.data.coins);
        mdata.setlistofcoins(response.data.data.coins);
        console.log("list", mdata.listofcoins);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div style={{textAlign:'center'}}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        sx={{ width: 300,margin:'auto' }}
        onChange={(element, newValue) => {
          mdata.setcoin(newValue);
        }}
        options={mdata.listofcoins}
        getOptionLabel={(options) => options.name}
        renderInput={(params) => <TextField {...params} label="Coins" />}
      />
      {
        mdata.coin != null ? 
        <>
        <br/>
        <h2 style={{fontWeight:'bold'}}>{ mdata.coin.name}:</h2>
        <br/>
        <h2 >Price: ${ parseFloat(mdata.coin.price).toFixed(3)}</h2>
        <h2>Market Cap: ${ parseFloat(mdata.coin.marketCap).toFixed(2)}</h2>
        <h2>24hr Volume: { parseFloat(mdata.coin.volume).toFixed(2)}</h2>
        <h2>Total Supply: { parseFloat(mdata.coin.totalSupply).toFixed(2)}</h2>
        <h2>Circulating Supply: { parseFloat(mdata.coin.circulatingSupply).toFixed(2)}</h2>
        <h2>All Time High: ${parseFloat( mdata.coin.allTimeHigh.price).toFixed(2)}</h2>
        </>
        
        :''
      }
    </div>
  );
};

export default Coininfo;
