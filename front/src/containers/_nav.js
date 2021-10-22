import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Users",
    route: "/users",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "coach",
        to: "/users/coach",
      },
      {
        _tag: "CSidebarNavItem",
        name: "client",
        to: "/users/client",
      }
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Register",
    route: "/register",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Register",
        to: "/register",
      },

    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Login",
    route: "/login",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "login",
        to: "/login",
      },

    ],
  },
];

export default _nav;
