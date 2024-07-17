import React from "react";

function Employee({ employee, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{employee.name}</td>
      <td>{employee.position}</td>
      <td>{employee.status === "Active" ? employee.salary : " "}</td>
      <td>{employee.status}</td>
    </tr>
  );
}

export default Employee;
