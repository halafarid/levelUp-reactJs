import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationList = (props) => {
  let elements = [];
  for (let i = 1; i <= Math.round(props.coursesCount / props.pageSize); i++) {
    elements.push(i);
  }

  return (
    <Pagination>
      {props.activePage === 1 ? (
        <Pagination.Prev disabled />
      ) : (
        <Pagination.Prev
          onClick={() =>
            props.handlePageClick(+props.activePage - 1, props.type)
          }
        />
      )}

      {elements.map((element) => (
        <Pagination.Item
          key={element}
          onClick={() => props.handlePageClick(element, props.type)}
        >
          {element}
        </Pagination.Item>
      ))}

      {props.activePage === elements.length ? (
        <Pagination.Next disabled />
      ) : (
        <Pagination.Next
          onClick={() =>
            props.handlePageClick(+props.activePage + 1, props.type)
          }
        />
      )}
    </Pagination>
  );
};

export default PaginationList;