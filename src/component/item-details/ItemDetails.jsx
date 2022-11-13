import React, { useState, useEffect } from "react";
import { Button, Box } from "@material-ui/core";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import { URL } from "../../Api/constrant";
import "../scss/productDetails.scss";

const ItemDetails = () => {
  const [productImageDetails, setProductImageDetails] = useState([]);
  const getProductImage = async () => {
    const response = await fetch(URL);
    const jsonData = await response.json();
    setProductImageDetails(jsonData.result.productList[0].images);
  };
  useEffect(() => {
    getProductImage();
  }, []);
  return (
    <Box className="leftContainer">
      <div className="div">
        <img
          className="secondaryProductImage"
          src={productImageDetails[0]}
          alt={productImageDetails[0]}
        />
        <img
          className="productImage"
          src={productImageDetails[1]}
          alt={productImageDetails.imageUrl}
          type="video/mp4"
        />
      </div>
      <br />
      <div className="buttonGroup">
        <Button className="addToCartButton" variant="contained">
          <Cart />
          Add to Cart
        </Button>
        <Button className="buyButton" variant="contained">
          <Flash /> Buy Now
        </Button>
      </div>
    </Box>
  );
};

export default ItemDetails;
