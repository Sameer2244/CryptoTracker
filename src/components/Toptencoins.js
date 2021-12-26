import CoinApi from "../Api/coinApi.js";
import React, { useContext, useEffect } from "react";
import CoinContext from "../context/coininfo/CoinContext";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

const Toptencoins = () => {
  const mdata = useContext(CoinContext);
  useEffect(() => {
    axios
      .request(CoinApi)
      .then(function (response) {
        console.log(response.data.data.coins);
        mdata.setlistofcoins(response.data.data.coins);
        console.log("toptencoin", mdata.listofcoins);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [mdata.coin]);
  return (
    <Container sx={{ flexGrow: 1, marginTop: "3vh",textAlign:'center' }}>
      <h2>Top 10 Cryptocurrencies</h2>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
        spacing={2}
      >
        {mdata.listofcoins.map((e, i) =>
          i < 10 ? (
            <Grid item xs={12} sm={6} md={3} sx={{ margin: "auto" }}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="black"
                      gutterBottom
                      variant="h5"
                    >
                      {e.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.primary">
                      ${parseFloat(e.price).toFixed(2)}
                    </Typography>
                  </Box>
                  {
                    e.change<0 ? <Typography
                    sx={{ fontSize: 14 }}
                    color="red"
                    gutterBottom
                  >
                    v {e.change}
                  </Typography> : <Typography
                    sx={{ fontSize: 14 }}
                    color="green"
                    gutterBottom
                  >
                    ^ {e.change}
                  </Typography>
                  }
                </CardContent>
                <CardActions>
                  <Button href="#coin-info" sx={{ margin: "auto" }} size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ) : (
            ""
          )
        )}
      </Grid>
    </Container>
  );
};

export default Toptencoins;
const list = [{ name: "sam" }, { name: "jae" }, { name: "noob" }];
