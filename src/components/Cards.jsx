import React from "react";
import styled from "styled-components";

const Cards = ({ amiibos }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <AllCards>
      {amiibos.map((amiibo, i) => {
        return (
          <div>
            <Img
              key={i}
              src={amiibo.image}
              alt="amiibo"
              onClick={handleClick}
            />
          </div>
        );
      })}
    </AllCards>
  );
};

export default Cards;

const AllCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin: 5vh 10vw;
`;

const Img = styled.img`
  height: 150px;
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;
