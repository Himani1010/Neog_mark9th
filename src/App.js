import React from "react";
import "./styles.css";
import { useState } from "react";
var books = {
  JavaScript: [
    {
      name: "Learn JavaScript VISUALLY",
      rating: "5/5"
    },
    {
      name: "Clean Code in JavaScript ",
      rating: "3.5/5"
    }
  ],

  fiction: [
    {
      name: "The Girl Who Drank the Moon ",
      rating: "4/5"
    },
    {
      name: " The War of Art",
      rating: "1/5"
    }
  ],
  business: [
    {
      name: "Think and Grow Rich ",
      rating: "5/5"
    },
    {
      name: "The Tatas",
      rating: "2/5"
    }
  ]
};
var BooksWehave = Object.keys(books);

export default function App() {
  var [generSelect, setGener] = useState("business");
  function genreClickHandler(book) {
    setGener(book);
  }

  return (
    <div className="App">
      <h1>📚 goodBooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div>
        {BooksWehave.map(function (book) {
          return (
            <button onClick={() => genreClickHandler(book)}>{book}</button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}></div>
      <ul>
        {books[generSelect].map(function (bookName) {
          return (
            <li>
              <div>{bookName.name}</div>
              <div>{bookName.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
