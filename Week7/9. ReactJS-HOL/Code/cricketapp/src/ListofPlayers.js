import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 80 },
    { name: 'Gill', score: 60 },
    { name: 'Rahul', score: 50 },
    { name: 'Pant', score: 30 },
    { name: 'Hardik', score: 90 },
    { name: 'Jadeja', score: 75 },
    { name: 'Ashwin', score: 40 },
    { name: 'Bumrah', score: 65 },
    { name: 'Siraj', score: 55 },
    { name: 'Kuldeep', score: 35 },
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>List of players havign score less than 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
