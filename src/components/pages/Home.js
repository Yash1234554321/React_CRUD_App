import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import Add from "./Add";
import ListUser from "./ListUser";

const Home = () => {
  return (
    <Fragment>
      <div>
        <Add />
      </div>
      <div>
        <h4 style={{ fontWeight: "bold" }}>List Of Users</h4>
        <ListUser />
      </div>
      <div style={{}}>
        <Link to="/listuser">
          <Button
            style={{ width: "500px", marginBottom: "5px", fontSize: "15px" }}
          >
            Profiles
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
