import React from "react";

const listStyle = {
  listStyleType: "none",
};

function List({coursework}) {
  return (
    <ul>
      {coursework.map((subject, index) => (
        <li style={listStyle} key={index}>{subject.name}</li>
      ))}
    </ul>
  );
}

export default List;
