import React from "react";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import Modal from "./Modal";

const Api = () => {
  const [showModal, setShowModal] = useState(false);
  const [amiibos, setAmiibos] = useState([]);
  const [card, setCard] = useState({});

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

  // function myTail(index) {
  //   console.log(index);
  // }

  // function checkType(type) {
  //   return type === "Card";
  // }

  const onClickHandler = (index) => {
    setShowModal(!showModal);

    !showModal
      ? setCard({
          image: amiibos[index].image,
          character: amiibos[index].character,
          series: amiibos[index].amiiboSeries,
          release: amiibos[index].release.jp,
        })
      : setCard({});
  };

  return (
    <div>
      <Cards onClickHandler={onClickHandler} amiibos={amiibos} />
      {showModal && <Modal onClickHandler={onClickHandler} data={card} />}
    </div>
  );
};

export default Api;
