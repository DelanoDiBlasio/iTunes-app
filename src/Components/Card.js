import React from "react";
import {
  Card,
  CardArtistName,
  CardImage,
  CardMainHeading,
} from "./Card.styles";
import { HeartTwoTone } from "@ant-design/icons";

//i used sources like styles- components to help make the syling more efficient//
//also used antd for icons

import { useData } from "../Context";

//creating the cards you see when looking at the images with the songs thumbnails in them//
//creating the cards functionality//

export function CardComponent() {
  const { result, dispatch } = useData();

  return (
    <div className="resultWrapper">
      {result.map((item) => {
        return (
          <Card>
            <figure style={{ background: "white" }}>
              <CardImage src={item.artworkUrl100} alt="" />
            </figure>
            <CardMainHeading>{item.trackName}</CardMainHeading>
            <CardArtistName>By : {item.artistName}</CardArtistName>
            <h5 style={{ background: "white" }}>
              Collection : {item.collectionName}
            </h5>
            <a
              style={{ background: "white" }}
              className="previewLink"
              href={item.trackViewUrl}
            >
              <button style={{ cursor: "pointer" }}>View Track</button>
            </a>

            <button
              onClick={() => dispatch({ type: "ADD", payload: item })}
              style={{ background: "white", cursor: "pointer" }}
              className="likeButton"
            >
              <HeartTwoTone twoToneColor="#eb2f96" />
            </button>
          </Card>
        );
      })}
    </div>
  );
}
