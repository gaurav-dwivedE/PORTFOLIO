import React from "react";
import PropTypes from "prop-types";

const Main = ({ title, description, children }) => (
  <div>
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
    <main>{children}</main>
  </div>
);

Main.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Main;