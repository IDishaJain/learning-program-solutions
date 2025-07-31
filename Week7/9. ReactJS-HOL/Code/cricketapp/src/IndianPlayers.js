import React from 'react';

const IndianPlayers = () => {
  const teamPlayers = ['Virat', 'Rohit', 'Gill', 'Rahul', 'Pant', 'Hardik'];

  const [odd1, even1, odd2, even2, odd3, even3] = teamPlayers;

  const T20Players = ['Surya', 'Tilak', 'Arshdeep'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Ishant'];

  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>List of Indian players merged</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
