import React from "react";
import "./LinkWithIcon.css";
import { NavLink } from "react-router-dom";
const LinkWithIcon = ({ title, link, emoji, sidebar }) => {
  return (
    <NavLink
      className={sidebar ? "align_center sidebar-link" : "align_center"}
      to={link}
    >
      {title} <img src={emoji} alt="" className=" link-emoji" />
    </NavLink>
  );
};

export default LinkWithIcon;
