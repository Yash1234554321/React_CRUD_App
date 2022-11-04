import React from "react";

import Card from "react-bootstrap/Card";
import "./CardWrapper.css"

const CardWrapper = (props) => {
  return (
    <div>
      <Card className="card">
        <Card.Body>{props.children}</Card.Body>
      </Card>
    </div>
  );
};

export default CardWrapper;
