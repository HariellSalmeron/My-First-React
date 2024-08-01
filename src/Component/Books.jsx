import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import Book from "./Book";
import "./Books.css";

const Books = () => {
  const initialBooks = [
    {
      title: "Math",
      author: "We",
      dueDate: "2023-01-15",
      status: "Checked Out",
    },
    {
      title: "Science",
      author: "Jane",
      dueDate: "2024-02-05",
      status: "Checked Out",
    },
    {
      title: "Chemistry",
      author: "Mike",
      dueDate: "",
      status: "Available",
    },
    {
      title: "Research",
      author: "Lisa",
      dueDate: "2024-03-20",
      status: "Checked Out",
    },
    {
      title: "Research 2",
      author: "John",
      dueDate: "",
      status: "Available",
    },
    {
      title: "Natsci",
      author: "Jane",
      dueDate: "2024-04-10",
      status: "Checked Out",
    },
    {
      title: "MS101",
      author: "Mike",
      dueDate: "",
      status: "Available",
    },
    {
      title: "WS301",
      author: "Lisa",
      dueDate: "2024-05-25",
      status: "Checked Out",
    },
    {
      title: "Natsci 2",
      author: "John",
      dueDate: "",
      status: "Available",
    },
    {
      title: "Statistic",
      author: "Jane",
      dueDate: "2024-06-30",
      status: "Checked Out",
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [search, setSearchQuery] = useState("");

  const handleToggleStatus = (index) => {
    const updatedBooks = books.map((book, i) => {
      if (i === index) {
        return {
          ...book,
          status: book.status === "Checked Out" ? "Available" : "Checked Out",
          dueDate:
            book.status === "Checked Out"
              ? ""
              : new Date(
                  Date.now() +
                    Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
                )
                  .toISOString()
                  .split("T")[0],
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="books-container">
      <SearchFilter search={search} setSearchQuery={setSearchQuery} />
      <table className="books-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <Book
              key={index}
              index={index}
              book={book}
              handleToggleStatus={handleToggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
