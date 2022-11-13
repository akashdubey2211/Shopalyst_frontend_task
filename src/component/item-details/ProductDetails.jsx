import React, { useState, useEffect } from "react";
import { URL } from "../../Api/constrant";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { LocalOffer as Badge } from "@material-ui/icons";
import RetailerPrice from "./RetailerPrice";


const ProductDetail = () => {
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const [productBasicDetails, setProductBasicDetails] = useState([]);
  const getProductImage = async () => {
    const response = await fetch(URL);
    const jsonData = await response.json();
    setProductBasicDetails(jsonData.result.productList[0]);
  };
  useEffect(() => {
    getProductImage();
  }, []);
  return (
    <>
      <Typography className="offerStyle">Special price
</Typography>
      <Box className="smallText">
        <Typography>
          <Badge className="badge" />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </Typography>
        <Typography>
          <Badge  className="badge" />
          Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
          transaction, Terms and Condition apply
        </Typography>
        <Typography>
          <Badge  className="badge" />
          Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
          ACs
        </Typography>
        <Typography>
          <Badge  className="badge" />
          Partner OfferExtra 10% off upto ₹500 on next furniture purchase
        </Typography>
      </Box>
      <Table>
        <TableBody>
          <TableRow className="smallText">
            <TableCell className="productHeadingTitle">Delivery</TableCell>
            <TableCell style={{ fontWeight: 'bold'  }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </TableRow>
          <TableRow className="smallText">
            <TableCell className="productHeadingTitle">Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </TableRow>
          <TableRow className="smallText">
            <TableCell className="productHeadingTitle">Seller</TableCell>
            <TableCell className="smallText">
              <span style={{ color: "#2874f0" }}>SuperComNet</span>
              <Typography>GST invoice available</Typography>
             <RetailerPrice />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} alt="" />
            </TableCell>
          </TableRow>
 
          <TableRow className="smallText">
            <TableCell className="productHeadingTitle">Description</TableCell>
            <TableCell>
              {productBasicDetails.description}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
