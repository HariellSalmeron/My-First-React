import React from "react";

const Book = ({ book, index, handleToggleStatus }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.status === "Checked Out" ? book.dueDate : ""}</td>
      <td>{book.status}</td>
      <td>
        <button
          className="toggle-button"
          onClick={() => handleToggleStatus(index)}
        >
          Toggle Status
        </button>
      </td>
    </tr>
  );
};

export default Book;
