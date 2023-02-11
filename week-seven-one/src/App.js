
import { useState } from 'react';
import './App.css';

function App() {
  
  const [book, setBook] = useState({
    title: "$100 Startup",
    author: "Chris Guillebeaut",
    year: 2010,
    rating: "3 star"
  })

const changeYear = () =>{
  setBook({...book, year: 2014})
}

  return (
    <div className="App">
      <h2>{book.title}</h2>
      <h2>{book.author}</h2>
      <h2>{book.year}</h2>
      <h2>{book.rating}</h2>
      <button onClick = {changeYear}>Click</button>
    </div>
  );
}

export default App;
