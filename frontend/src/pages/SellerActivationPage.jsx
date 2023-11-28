import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/shop/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err)
            if (!err.response.data) {
              setError(err.message);
              return;
            }
            
            setError(err.response.data.message);
          });
      };
      sendRequest();
    }
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error !== '' ? (
        <p>{error}</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default SellerActivationPage;
