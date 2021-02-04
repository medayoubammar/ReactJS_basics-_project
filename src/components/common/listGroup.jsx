import React from "react";
import "../../styles/listGroup.css";

const ListGroup = (props) => {
  const {
    items,
    valueProperty,
    textProperty,
    onGenreSelect,
    selectedItem,
  } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty] || ""}
          onClick={() => onGenreSelect(item)}
          className={
            item === selectedItem
              ? "list-group-item active"
              : "list-group-item "
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
