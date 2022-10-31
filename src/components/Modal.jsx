import React from "react";
import styled from "styled-components";

const Modal = ({ data, onClickHandler }) => {
  return (
    <div className="modal-backdrop" onClick={onClickHandler}>
      <Background>
        <MyModal>
          <Card>
            <Img src={data.image} alt="amiibo" />
            <Char>{data.character}</Char>
            <Series>{data.series}</Series>
            <Release>Release: {data.release}</Release>
          </Card>
          {/* <Button onClick={onClickHandler}>X</Button> */}
        </MyModal>
      </Background>
    </div>
  );
};

export default Modal;

const Background = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyModal = styled.div`
  border-radius: 25px;
  background-color: #252525;
  color: #ebecf0;

  text-align: center;
  position: absolute;
`;

const Card = styled.div`
  overflow: hidden;
`;

const Img = styled.img`
  height: 350px;
`;

const Char = styled.h2`
  background-color: #181818;
  margin-top: -5px;
  padding: 15px 0px;
`;

const Series = styled.h4`
  background-color: #1e1e1e;
  padding: 10px 0px;
`;

const Release = styled.p`
  font-size: 14px;
  margin: 10px 0px 15px 0px;
`;

// const Button = styled.button`
//   position: relative;
//   background-color: #181818;
//   border-radius: 15px;
//   border-style: none;
//   height: 30px;
//   width: 30px;
//   color: #ebecf0;
//   right: -150px;
//   top: -465px;
//   cursor: pointer;

//   &:hover {
//     background-color: #252525;
//   }
// `;
