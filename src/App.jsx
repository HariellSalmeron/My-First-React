import React from "react";
import Employees from "./components/Employees";

function App() {
  const employeesProperty = [
    { name: "Fit", position: "Manager", salary: 1000, status: "Active" },
    { name: "Prince", position: "Developer", salary: 2000, status: "Active" },
    { name: "Karl", position: "Designer", salary: 3000, status: "Active" },
    { name: "Fritz", position: "Developer", salary: 4000, status: "Active" },
    { name: "Shua", position: "Manager", salary: 5000, status: "Active" },
    { name: "Jay", position: "Designer", salary: 6000, status: "Active" },
    { name: "Mara", position: "Developer", salary: 7000, status: "Active" },
    { name: "Hades", position: "Manager", salary: 8000, status: "Active" },
    { name: "Wewe", position: "Designer", salary: 0, status: "Not Active" },
    { name: "Janrey", position: "Developer", salary: 0, status: "Not Active" },
  ];

  return (
    <div className="App">
      <h1>Employee List</h1>
      <Employees employees={employeesProperty} />
    </div>
  );
}

export default App;
