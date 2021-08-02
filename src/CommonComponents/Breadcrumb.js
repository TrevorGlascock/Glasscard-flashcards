import React from "react";
import { Link } from "react-router-dom";

//TODO add aria-current attribute to the breadcrumb items

function Breadcrumb({ navPath }) {
  const navItems = navPath
    ? navPath.map((item, index) => {
        let { title, destination } = item;
        //The last item may just be a string of the title instead of an object
        if (typeof item === "string") title = item;

        //The last item in the navPath is rendered differently
        if (index === navPath.length - 1)
          return (
            <li
              key={index}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {title}
            </li>
          );
        //All other items will be links to their respective pages
        return (
          <li key={index} className="breadcrumb-item">
            <Link to={destination}>{title}</Link>
          </li>
        );
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
