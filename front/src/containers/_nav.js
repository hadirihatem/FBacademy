import React from "react";
import CIcon from "@coreui/icons-react";
import { cilBell } from "@coreui/icons";

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

    _tag: "CSidebarNavItem",
    name: "Test",
    to: "/test",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },


  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Expenses",
    route: "/expenses",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "expenses",
        to: "/expenses",
      },

    ],
  },




  {
    _tag: "CSidebarNavDropdown",
    name: "Users",
    route: "/users",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "users",
        to: "/users",
      },

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
  {
    _tag: "CSidebarNavDropdown",
    name: "icons",
    route: "/icons",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "brands",
        to: "/icons/brands",
      },

    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "buttons",
    route: "/buttons",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "brandButton",
        to: "/buttons/brand-buttons",
      },

    ],
  },
];

export default _nav;
