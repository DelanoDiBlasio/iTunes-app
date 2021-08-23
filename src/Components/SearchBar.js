import React from "react";
import { create } from "apisauce";
import { useEffect, useState } from "react";
import { useData } from "../Context";
import { SearchBar } from "./SearchBar.styles";

//search bar with the Itunes API//
//using react hooks to collect data//
//search bar styling is used with the searchbar.styles file//
//used styling-components for the styling//

export function SearchBarComponent() {
  const { setResult } = useData();
  const [searchItem, setSearchItem] = useState("");

  //itunes API//
  const url = `https://itunes.apple.com/search?term=${searchItem}`;

  const api = create({
    baseURL: url,
  });

  useEffect(() => {
    api
      .get("/")
      .then((response) => setResult(response.data.results))
      .catch((err) => console.log(err));
  }, [searchItem]);

  //input change for the search bar
  function inputChangeHandler(event) {
    setSearchItem(event.target.value);
  }

  //the search bar //
  return (
    <div>
      <SearchBar
        type="text"
        onChange={inputChangeHandler}
        value={searchItem}
        placeholder="Put your choice here..."
        // enterButton="Enter"
      />
    </div>
  );
}
