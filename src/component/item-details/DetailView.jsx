import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import ItemDetails from "./ItemDetails";
import ProductDetail from "./ProductDetails";
import { URL } from "../../Api/constrant";

const DetailView = () => {
  const [productDetails, setProductDetails] = useState([]);
  const getProductImage = async () => {
    const response = await fetch(URL);
    const jsonData = await response.json();
    setProductDetails(jsonData.result.productList[0]);
  };
  useEffect(() => {
    getProductImage();
  }, []);

  return (
    <Box className="DetailComponent">
      <Box></Box>
      <Grid container className="container">
        <Grid item lg={4} md={4} sm={8} xs={12}>
          <ItemDetails />
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          sm={8}
          xs={12}
          className="rightContainer"
        >
          <Typography className="productTitle">{productDetails.title}</Typography>
          <Typography
            className="smallText"
            style={{ marginTop: 5 }}
          >
            8 Ratings & 1 Reviews
            <span>
              <img
                src={"fassured"}
                style={{ width: 77, marginLeft: 20 }}
                alt=""
              />
            </span>
          </Typography>
          <Typography>
            <span className="price">₹{productDetails.offerPrice}</span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#878787" }}>
              <strike>₹50</strike>
            </span>
            &nbsp;&nbsp;&nbsp;
            <span style={{ color: "#388E3C" , fontWeight:"bold" , fontSize:14 }}>₹{productDetails.discount} off</span>
          </Typography>
          <ProductDetail />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailView;
