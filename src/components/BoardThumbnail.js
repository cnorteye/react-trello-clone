import React from "react";
import styled from "styled-components";
import '../index.css'

const BoardThumbnail = ({ title,}) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
      
      {/*<DeleteButton> x </DeleteButton> */}
      
    </Thumbnail>
  );
};

export default BoardThumbnail;

const Thumbnail = styled.div`
  height: 280px;
  width: 280px;
  background: yellow;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h4`
  color: red;
  text-decoration: none;
`;

/*
// this is the delete button. i am trying to find a way to move it to the upper corner
const DeleteButton = styled.button`   
float: right;
margin: 5px;
font-size: 14px;
cursor: default;
color: black;
`;
*/
