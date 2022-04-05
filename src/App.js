import * as React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Tata IPL 2022</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/players">Players</Link> | <Link to="/teams">Teams</Link>
      </nav>
      <Outlet />
    </div>
  );
}
