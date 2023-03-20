import React, { FunctionComponent } from "react";
import { Link } from "react-scroll";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  id: string;
  offset: number;
  onClick: Function;
}> = ({ activeItem, setActiveItem, name, offset, id, onClick }) => {
  return (
    <Link
      className="cursor-pointer"
      to={id}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1200}
    >
      <li
        className={`${
          activeItem == name
            ? "text-accent"
            : "text-primaryDark dark:text-primary"
        }  hover:text-accent dark:hover:text-accent hover:scale-110 transition-all `}
        onClick={() => {
          setActiveItem(name);
          onClick();
        }}
      >
        {name}
      </li>
    </Link>
  );
};

export default NavItem;
