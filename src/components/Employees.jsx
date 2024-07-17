import React from "react";
import Employee from "./Employee";

function Employees({ employees }) {
  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Employee Names</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <Employee key={employee} employee={employee} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Employees;
