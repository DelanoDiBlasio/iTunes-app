import { createContext, useContext, useReducer } from "react";
import { useState } from "react";

export const DataContext = createContext();
export const LikedItems = [];

export function DataProvider({ children }) {
  const [result, setResult] = useState([]);
  const [state, dispatch] = useReducer(ReducerFunc, {
    LikedItems,
  });

  return (
    <DataContext.Provider value={{ result, state, dispatch, setResult }}>
      {children}
    </DataContext.Provider>
  );
}

function ReducerFunc(state, action) {
  switch (action.type) {
    case "ADD":
      localStorage.setItem("likedsongs", [JSON.stringify(action.payload)]);
      return {
        ...state,
        LikedItems: [...state.LikedItems, action.payload],
      };

    default:
      console.log("You messed up something");
  }
}

export function useData() {
  return useContext(DataContext);
}
