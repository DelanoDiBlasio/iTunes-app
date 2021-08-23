import { CardComponent } from "./Card";
import { SearchBarComponent } from "./SearchBar";
import React from "react";

//homepage Content
export function HomePage() {
  return (
    <>
      <SearchBarComponent />
      <CardComponent />
    </>
  );
}
