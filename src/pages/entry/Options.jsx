import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import { Row } from "react-bootstrap";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : null;
  console.log(ItemComponent);

  const optionItems = items?.map((item) => (
    <ItemComponent key={item.name} name={item.name} image={item.imagePath} />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
