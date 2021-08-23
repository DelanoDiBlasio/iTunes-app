import styled from "styled-components";

//used sources like styled-components to help make the syling more efficient//
//this is all the styling for the card.js file//
//also used antd for icons//

export const Card = styled.div`
  border: 1px solid gray;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  max-width: 80%;
  box-shadow: 2px 2px 2px gray;
  background: white;
`;

export const CardImage = styled.img`
  height: 12rem;
  width: 12rem;
  border: 1px hidden white;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const CardMainHeading = styled.h3`
  font-size: 1.4rem;
  margin: 1rem;
  font-family: lato;
  background: white;
`;

export const CardArtistName = styled.h4`
  font-weight: 400;
  font-family: lato;
  margin: 0.5rem;
  background: white;
`;
