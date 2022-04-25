import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:8080/books")
    .then(r=>r.json())
    .then(data=>{
      setData(data)
    })
    // make a GET request to http://localhost:8080/books to get all the books data
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          
      </Grid>
    </>
  );
};
export default Books;
