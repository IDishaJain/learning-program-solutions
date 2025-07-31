import React from 'react';

function BookDetails(props) {
  return (
    <div style={{ flex: 1, borderRight: '2px solid green', padding: '10px' }}>
      <h2>Book Details</h2>
      {props.books.map(book => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
