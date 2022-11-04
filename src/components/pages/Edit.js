import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Users from "../others/Users";

const Edit = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  const [countryList, setCountryList] = useState([]);

  let navigate = useNavigate();

  var index = Users.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = Users[index];

    user.name = username;
    user.email = email;
    user.phoneNo = phoneNo;
    user.dob = dob;
    user.city = city;
    user.district = district;
    user.province = province;
    user.country = country;

    navigate("/");
  };

  useEffect(() => {
    setUsername(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPhoneNo(localStorage.getItem("phoneNo"));
    setDob(localStorage.getItem("dob"));
    setCity(localStorage.getItem("city"));
    setDistrict(localStorage.getItem("district"));
    setProvince(localStorage.getItem("province"));
    setCountry(localStorage.getItem("country"));
    setId(localStorage.getItem("id"));
  }, []);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountryList(response?.data);
    });
  }, []);

  return (
    <div>
      <Form
        className="d-grid gap-2"
        style={{
          width: "700px",
          height: "100%",
          backgroundColor: "whitesmoke",
          border: "0.1px solid",
          padding: "20px",
          margin: "auto",
        }}
      >
        <Form.Label className="input-label">Name</Form.Label>
        <Form.Group classname="mb-3" controlId="formName">
          <Form.Control
            type="text"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Label className="input-label">Email</Form.Label>
        <Form.Group classname="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Label className="input-label">Phone Number</Form.Label>
        <Form.Group classname="mb-3" controlId="formPhone">
          <Form.Control
            type="number"
            required
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Label className="input-label">Date Of Birth</Form.Label>
        <Form.Group classname="mb-3" controlId="formDOB">
          <Form.Control
            type="date"
            required
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Label className="input-label">City</Form.Label>
        <Form.Group classname="mb-3" controlId="formCity">
          <Form.Control
            type="text"
            required
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Label className="input-label">District</Form.Label>
        <Form.Group classname="mb-3" controlId="formDistrict">
          <Form.Control
            type="text"
            required
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Label className="input-label">Province</Form.Label>
        <Form.Select
          value={province}
          onChange={(e) => {
            setProvince(e.target.value);
          }}
        >
          <option>---Select Province---</option>
          <option>Province 1</option>
          <option>Province 2</option>
          <option>Province 3</option>
          <option>Province 4</option>
          <option>Province 5</option>
          <option>Province 6</option>
          <option>Province 7</option>
        </Form.Select>
        <Form.Label className="input-label">Country</Form.Label>
        <Form.Select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option>---Select Country---</option>
          {countryList.map((item) => (
            <option>{item?.name?.common}</option>
          ))}
        </Form.Select>

        <Button onClick={(e) => handleSubmit(e)}>Update</Button>
      </Form>
    </div>
  );
};

export default Edit;
