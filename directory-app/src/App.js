import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";

const headings = [
  'Name',
  'Age',
  'Ethnicity',
  'Phone Number',
  'Emergency Contact',
];

const rows = [
  [
    "Tonia",
    35,
    "White",
    867-5309,
    "Matt",
  ],
];
    



function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Table headings={headings} rows={rows} />
        {/*more stuff goes in here*/}
      </div>
    </Router>
  );
}

export default App;
