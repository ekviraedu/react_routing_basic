import * as React from "react";

import { useParams, useNavigate } from "react-router-dom";
import { getPlayer, deletePlayer } from "../data";

export default function PlayerData() {
  let navigate = useNavigate();
  let params = useParams();
  let playerDetails = getPlayer(parseInt(params.statsId, 10));

  return (
    <styles style={{ padding: "1rem" }}>
      <h2>Base Price: {playerDetails.price}</h2>
      <p>
        {playerDetails.name}'s Shirt: {playerDetails.number}
      </p>
      <p>Debut Date: {playerDetails.debut}</p>
      <p>
        <button
          onClick={() => {
            deletePlayer(playerDetails.number);
            navigate("/players");
          }}
        >
          Delete
        </button>
      </p>
    </styles>
  );
}
