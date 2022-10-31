import React from "react";
import styled from "styled-components";

const Modal = ({ amiibos }) => {
  return (
    <div className="modal-backdrop">
      <Background>
        {amiibos.map((amiibo, i) => {
          return (
            <MyModal>
              <img key={i} src={amiibo.image} alt="amiibo" />
              <Char>{amiibo.character}</Char>
              <Series>{amiibo.amiiboSeries}</Series>
              <Release>Release: {amiibo.release.jp}</Release>
            </MyModal>
          );
        })}
        <button>close</button>
      </Background>
    </div>
  );
};

export default Modal;

const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const MyModal = styled.div`
  border-radius: 25px;
  background-color: #252525;
  overflow: hidden;
  color: #ebecf0;

  text-align: center;
`;

const Char = styled.h2`
  background-color: #181818;
  margin-top: -5px;
  padding: 15px 0px;
`;

const Series = styled.h4`
  background-color: #1e1e1e;
  padding: 5px 0px;
`;

const Release = styled.p`
  font-size: 14px;
  margin: 5px 0px 20px;
`;
