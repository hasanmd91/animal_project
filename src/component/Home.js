import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home ">
      <Link to="/animal">
        {" "}
        <div className="animals"></div>
      </Link>

      <Link to="/bird">
        {" "}
        <div className="birds"></div>
      </Link>
    </div>
  );
};

export default Home;
