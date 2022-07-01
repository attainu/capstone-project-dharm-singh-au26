import React from "react";

export const Blog = (props) => {
  return (
    <div
      style={{
        margin: "5px 50px",
        padding: "10px",
        backgroundColor: "#EBECF0",
        border: "1px solid gray",
        borderRadius: "5px",
      }}
    >
      <div style={{ color: "rgba(69,187,252,1)" }}>
        Title: {props.blog.title}
      </div>
      <div>Description: {props.blog.description}</div>
    </div>
  );
};
