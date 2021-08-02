import React from "react";
import { Link } from "react-router-dom";

//TODO add aria-current attribute to the breadcrumb items

function Breadcrumb({ navPath }) {
  const navItems = navPath
    ? navPath.map((item, index) => {
        //If it's the last item in the navPath, it needs to be set to active
        const active = index === navPath.length - 1 ? `active` : null;
        return <li className={`breadcrumb-item ${active}`}>{item}</li>;
      })
    : navPath;
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="">
            <span
              className="oi oi-home pr-2"
              title="Home"
              aria-hidden="true"
            ></span>
            Home
          </Link>
        </li>
        {navItems}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
