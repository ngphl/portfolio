import React from "react";

const listStyle = {
  listStyleType: "none",
};

function List({array}) {
  return (
    <ul>
      {array.map((item, index) => (
        <li style={listStyle} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
