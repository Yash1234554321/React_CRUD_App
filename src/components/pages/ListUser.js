import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Button } from "react-bootstrap";

import "./ListUser.css";
import UserTable from "../others/UserTable";

const ListUser = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="list-main">
      {location.pathname === "/listuser" && (
        <h1 className="list-header">Profiles</h1>
      )}

      <div style={{ margin: "5rem" }}>
        <UserTable />
      </div>
      <div>
        {location.pathname === "/listuser" && (
          <Button
            style={{ width: "500px", marginBottom: "5px", fontSize: "15px" }}
            onClick={handleClick}
          >
            Home
          </Button>
        )}
      </div>
    </div>
  );
};

export default ListUser;
