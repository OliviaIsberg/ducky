import { Container } from "@mui/material";
import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import { OrderData } from "../components/Forms/OrderForm";
import useLocalStorage from "../Hooks/useLocalStorage";

function RandomOrderNumber() {
  return Math.floor(Math.random() * 1000000);
}

function ConfirmedOrderPage() {
  const orderData = localStorage.getItem("orderDetails");
  function changeToArray() {
    return orderData? JSON.stringify(orderData) : []
    // const newOrderData = Object.entries({orderData}) : []
    //return newOrderData
  }
  
  changeToArray();
  console.log(orderData);

  return (
    <Container maxWidth="md">
      <h2>Tack för din beställning!</h2>
      <p>
        Din betalning och beställning har genomförts, och snart kommer dina nya
        ankor till sitt nya hem! <br />
        Nedan är en sammanfattning på din beställning;
      </p>
      <h3>Ordernummer: #{RandomOrderNumber()}</h3>
      <h3>Produkter:</h3>
      {/* get the summary of bought products */}
      {/* < CartSummary /> */}
      <h3>Leveransadress:</h3>
      <div>
        {/* <p>{orderData}</p> */}
      </div>
      {/* {localStorage.getItem('orderDetails') && (
            <div>
               OrderData: <p>{localStorage.getItem('orderDetails') }</p>
            </div>
         )} */}
      <h3>Leveransmetod:</h3>
      {/* get the adress from local storage */}
      <h3>Betalningsmetod:</h3>
      {/* get the chosen payment method */}
      <p>
        Skulle någonting inte stämma, eller om du har övriga frågor är du varmt
        välkommen att kontakta oss på: support@ducky.se
      </p>
    </Container>
  );
}

export default ConfirmedOrderPage;
