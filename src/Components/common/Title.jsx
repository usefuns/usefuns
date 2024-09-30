import React from "react";

const Title = ({ title }) => {
  return (
    <div
      className="_title"
      // _title classname is global so name start with _ and inside index.css file
    >
      <h5>{title}</h5>
    </div>
  );
};

export default Title;
