import React from 'react';
import './App.css';

function App() {
  const heading = <h1>Office Space, at Afforddable Range</h1>;

  const imageURL = 'https://img.freepik.com/premium-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-working-table_105762-2107.jpg';

  const office = {
    name: 'WeWork Space',
    rent: 55000,
    address: 'Koramangala, Bangalore',
  };

  const officeList = [
    { name: 'WeWork Space', rent: 55000, address: 'Koramangala, Bangalore' },
    { name: '91Springboard', rent: 65000, address: 'MG Road, Bangalore' },
    { name: 'Regus Space', rent: 48000, address: 'HSR Layout, Bangalore' },
    { name: 'Innov8', rent: 72000, address: 'Indiranagar, Bangalore' }
  ];

  return (
    <div className="App">
      {heading}

      <img
        src={imageURL}
        alt="Office Space"
        width="400px"
        height="250px"
        style={{ borderRadius: '10px', marginBottom: '20px' }}
      />

      <h2>Single Office Details</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p>
        <strong>Rent:</strong>{' '}
        <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
          ₹{office.rent}
        </span>
      </p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>Available Office Spaces</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <strong>Name:</strong> {item.name}<br />
            <strong>Rent:</strong>{' '}
            <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
              ₹{item.rent}
            </span><br />
            <strong>Address:</strong> {item.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
