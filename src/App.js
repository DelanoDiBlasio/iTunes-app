import "./styles.css";
import { HomePage } from "./Components/HomePage";
import { Link, Switch, Route } from "react-router-dom";
import { LikedPage } from "./Components/LikedPage";

export default function App() {
  return (
    <div className="App">
      <h1 className="mainHeading">iTunes Search API</h1>
      <nav>
        <Link
          className="link"
          style={{
            margin: "1rem",
            textDecoration: "none",
            backgroundColor: "#66ccff",
            padding: "0.3rem",
            border: "1px hidden",
            borderRadius: "0.5rem",
            color: "grap",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            margin: "1rem",
            textDecoration: "none",
            backgroundColor: "#66ccff",
            padding: "0.3rem",
            border: "1px hidden",
            borderRadius: "0.5rem",
            color: "gray",
          }}
          to="/liked"
        >
          Liked
        </Link>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/liked" component={LikedPage} />
      </Switch>
    </div>
  );
}
