import React from "react";

export default function Navbar() {
  const menu = [
    { name: "DASHBOARD", path: "/" },
    { name: "USERS", path: "/users" },
    { name: "LOGOUT", path: "/login" },
  ];
  return (
    <ul className="bg-slate-600 flex justify-evenly">
      {menu.map((item) => {
        return (
          <li style={{listStyleType:"none"}}>
            <a style={{textDecoration:'none'}} href={item.path}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
