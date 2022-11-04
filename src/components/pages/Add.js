import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import axios from "axios";

import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Users from "../others/Users";
import CardWrapper from "../UI/CardWrapper";
import "./Add.css";

const Add = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  const [countryList, setCountryList] = useState([]);

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredPhoneNoIsValid, setEnteredPhoneNoIsValid] = useState(true);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    let enteredUsername = username;
    let enteredEmail = email;
    let enteredPhoneNo = phoneNo;
    let enteredDob = dob;
    let enteredCity = city;
    let enteredDistrict = district;
    let enteredProvince = province;
    let enteredCountry = country;

    if (enteredUsername === "") {
      setEnteredNameIsValid(false);

      return;
    }
    setEnteredNameIsValid(true);

    if (enteredEmail === "") {
      setEnteredEmailIsValid(false);
      return;
    }
    setEnteredEmailIsValid(true);

    if (enteredPhoneNo === "" || enteredPhoneNo.length !== 7) {
      setEnteredPhoneNoIsValid(false);
      return;
    }
    setEnteredPhoneNoIsValid(true);

    Users.push({
      id: uniqueId,
      name: enteredUsername,
      email: enteredEmail,
      phoneNo: enteredPhoneNo,
      dob: enteredDob,
      city: enteredCity,
      district: enteredDistrict,
      province: enteredProvince,
      country: enteredCountry,
    });

    setUsername("");
    setEmail("");
    setPhoneNo("");
    setDob("");
    setCity("");
    setDistrict("");
    setProvince("");
    setCountry("");

    navigate("/");
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountryList(response?.data);
    });
  }, []);

  return (
    <div>
      <CardWrapper>
        <h4 style={{ fontWeight: "bold" }}>Create New User</h4>
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
          onSubmit={handleSubmit}
        >
          <Form.Label className="input-label">Name</Form.Label>
          <Form.Group classname="mb-3" controlId="formName">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            {!enteredNameIsValid && <p className="error">Name is empty</p>}
          </Form.Group>
          <Form.Label className="input-label">Email</Form.Label>
          <Form.Group classname="mb-3" controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></Form.Control>
            {!enteredEmailIsValid && <p className="error">Email is empty</p>}
          </Form.Group>
          <Form.Label className="input-label">Phone Number</Form.Label>
          <Form.Group classname="mb-3" controlId="formPhone">
            <Form.Control
              type="number"
              placeholder="Enter Phone No"
              value={phoneNo}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            ></Form.Control>
            {!enteredPhoneNoIsValid && (
              <p className="error">
                Phone No is not valid. Make sure Phone No has at least 7 digits.
              </p>
            )}
          </Form.Group>
          <Form.Label className="input-label">Date Of Birth</Form.Label>
          <Form.Group classname="mb-3" controlId="formDOB">
            <Form.Control
              type="date"
              placeholder="Enter Date of Birth"
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
              placeholder="Enter City"
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
              placeholder="Enter District"
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

          <Button type="submit">Add</Button>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default Add;
