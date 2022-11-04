import _ from "lodash";
import React from "react";
import { Button } from "react-bootstrap";
import { Table } from "semantic-ui-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Message } from "semantic-ui-react";

import tableData from "./Users";
import "./UserTable.css";

function tableReducer(state, action) {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: "ascending",
      };
    default:
      throw new Error();
  }
}

function UserTable() {
  const location = useLocation();

  const [state, dispatch] = React.useReducer(tableReducer, {
    column: null,
    data: tableData,
    direction: null,
  });
  const { column, data, direction } = state;

  let navigate = useNavigate();

  const handleEdit = (
    id,
    name,
    email,
    phoneno,
    dob,
    city,
    district,
    province,
    country
  ) => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNo", phoneno);
    localStorage.setItem("dob", dob);
    localStorage.setItem("city", city);
    localStorage.setItem("district", district);
    localStorage.setItem("province", province);
    localStorage.setItem("country", country);
    localStorage.setItem("id", id);
  };

  {
    location.pathname === "/listuser" && (
      <h1 className="list-header">Profiles</h1>
    );
  }

  const handleDelete = (id) => {
    var index = tableData
      .map((e) => {
        return e.id;
      })
      .indexOf(id);

    tableData.splice(index, 1);
    if (location.pathname === "/") {
      navigate("/");
    }
    if (location.pathname === "/listuser") {
      navigate("/listuser");
    }

    <Message color="red">Red</Message>;
  };

  return (
    <div className="user-table">
      <Table
        sortable
        celled
        fixed
        className="ui celled inverted selectable table"
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "name" ? direction : null}
              onClick={() => dispatch({ type: "CHANGE_SORT", column: "name" })}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === "email" ? direction : null}>
              Email
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === "phoneNo" ? direction : null}>
              Phone No
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === "dob" ? direction : null}>
              Date of Birth
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === "city" ? direction : null}>
              City
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === "district" ? direction : null}>
              District
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === "province" ? direction : null}>
              Province
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === "country" ? direction : null}>
              Country
            </Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data && data.length > 0 ? (
            data.map(
              ({
                id,
                name,
                email,
                phoneNo,
                dob,
                city,
                district,
                province,
                country,
              }) => (
                <Table.Row key={id}>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                  <Table.Cell>{phoneNo}</Table.Cell>
                  <Table.Cell>{dob}</Table.Cell>
                  <Table.Cell>{city}</Table.Cell>
                  <Table.Cell>{district}</Table.Cell>
                  <Table.Cell>{province}</Table.Cell>
                  <Table.Cell>{country}</Table.Cell>
                  <Table.Cell>
                    <div style={{ display: "flex" }}>
                      <span>
                        <Link to="/edit">
                          <Button
                            onClick={() =>
                              handleEdit(
                                id,
                                name,
                                email,
                                phoneNo,
                                dob,
                                city,
                                district,
                                province,
                                country
                              )
                            }
                          >
                            Edit
                          </Button>
                        </Link>
                      </span>
                      &nbsp;
                      <span>
                        <Button
                          className="btn btn-danger"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </Button>
                      </span>
                    </div>
                  </Table.Cell>
                </Table.Row>
              )
            )
          ) : (
            <p style={{fontSize:"18px",width:"100%",marginLeft:"550px"}}>No data found</p>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

export default UserTable;
