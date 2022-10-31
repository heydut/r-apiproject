import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./Cards";
import Modal from "./Modal";

const Api = () => {
  const [amiibos, setAmiibos] = useState([]);

  useEffect(() => {
    async function getMyAmiibo() {
      const response = await fetch(
        "https://www.amiiboapi.com/api/amiibo/?gameseries=Animal Crossing"
      );
      const data = await response.json();
      setAmiibos(data.amiibo.filter((amiibo) => amiibo.type === "Card"));
    }
    getMyAmiibo();
  }, []);

  // function checkType(type) {
  //   return type === "Card";
  // }

  return (
    <div>
      <Cards amiibos={amiibos} />
      {/* <Modal amiibos={amiibos} /> */}
    </div>
  );
};

export default Api;
