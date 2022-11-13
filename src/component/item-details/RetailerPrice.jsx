import React,{useState, useEffect} from 'react'
import { Typography } from '@material-ui/core'
import { URL } from "../../Api/constrant";

const RetailerPrice = () => {

  const [retailerPrice, setRetailerPrice] = useState([]);
  const getProductImage = async () => {
    const response = await fetch(URL);
    const jsonData = await response.json();
    setRetailerPrice(jsonData.result.productList[0].skuSet[0].offerPrice);
  };
  useEffect(() => {
    getProductImage();
  }, []);
  return (
    <div> <Typography>View more sellers starting from ₹{retailerPrice}</Typography></div>
  )
}

export default RetailerPrice
