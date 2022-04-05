import * as React from "react";

import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams
} from "react-router-dom";
import { getPlayers } from "../data";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Players() {
  let players = getPlayers();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter }, { replace: true });
            } else {
              setSearchParams({}, { replace: true });
            }
          }}
        />
        {players
          .filter((player) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = player.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((player) => (
            <QueryNavLink
              key={player.number}
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to={`/players/${player.number}`}
            >
              {player.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
