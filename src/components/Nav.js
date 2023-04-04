import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav>
      <h2>waves</h2>
      <button>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};
export default Nav;
