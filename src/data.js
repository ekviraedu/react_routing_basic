/**
 * @type {Players[]}
 */
let players = [
  {
    name: "Virat Kohli",
    number: 18,
    price: "INR 15 crore",
    debut: "12/05/2005"
  },
  {
    name: "Jasprit Bumrah",
    number: 66,
    price: "INR 8 crore",
    debut: "10/31/2012"
  },
  {
    name: "Rohit Sharma",
    number: 45,
    price: "INR 12 crore",
    debut: "07/22/2003"
  },
  {
    name: "Rishab Pant",
    number: 14,
    price: "INR 14 crore",
    debut: "09/01/2019"
  },
  {
    name: "Ravindra Jadeja",
    number: 27,
    price: "INR 16 crore",
    debut: "01/27/2012"
  },
  {
    name: "KL Rahul",
    number: 34,
    price: "INR 13 crore",
    debut: "01/27/2017"
  }
];

export function getPlayers() {
  return players;
}

/**
 * @param {number} number
 * @returns {player}
 */
export function getPlayer(number) {
  return players.find((player) => player.number === number);
}

/**
 * @param {number} number
 * @returns {void}
 */
export function deletePlayer(number) {
  players = players.filter((player) => player.number !== number);
}

/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
 */
