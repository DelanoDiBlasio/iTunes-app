import {
  Card,
  CardImage,
  CardMainHeading,
  CardArtistName,
} from "./Card.styles";
import React from "react";
import { useData } from "../Context";

export function LikedPage() {
  // const { state } = useData();
  const LikedSongs = [JSON.parse(localStorage.getItem("likedsongs"))];

  return (
    <>
      <h2>Liked Songs</h2>
      {LikedSongs.map((item) => {
        return (
          <div className="resultWrapper">
            <Card>
              <figure style={{ background: "white" }}>
                <CardImage src={item.artworkUrl100} alt="" />
              </figure>
              <CardMainHeading>{item.trackName}</CardMainHeading>
              <CardArtistName>By : {item.artistName}</CardArtistName>
              <h5 style={{ background: "white" }}>
                Collection : {item.collectionName}
              </h5>
            </Card>
          </div>
        );
      })}
    </>
  );
}
