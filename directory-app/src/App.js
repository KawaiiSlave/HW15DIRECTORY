import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import "./index.css"


function App() {
  const [searchTerm, setSearchTerm] = useState('')

  console.log(searchTerm);

  const headings = [
    'Name',
    'Age',
    'Ethnicity',
    'Phone Number',
    'Emergency Contact',
  ];

  let rows = [
    {name: "Tyler", age: 26, ethnicity: "White", phone: '867-5309', eContact: "Mom"},
    {name: "Kay", age: 27, ethnicity: "White", phone: '356-5209', eContact: "Dad"},
    {name: "Cassidy", age: 35, ethnicity: "Black", phone: '886-2237', eContact: "Grandpa"},
    {name: "Stephen", age: 66, ethnicity: "Asian", phone: '568-5688', eContact: "Grandpa"},
    {name: "James", age: 26, ethnicity: "White", phone: '999-2212', eContact: "Mom"},
    {name: "Leslie", age: 98, ethnicity: "White", phone: '889-9043', eContact: "Mom"},
    {name: "Tom", age: 33, ethnicity: "Black", phone: '777-7777', eContact: "Dad"},
    {name: "Mary", age: 31, ethnicity: "Asian", phone: '442-2248', eContact: "Dad"},
    {name: "Ellen", age: 21, ethnicity: "White", phone: '865-3343', eContact: "Aunt"},
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const sortByName = (e) => {
    console.log(e);
    rows = rows.sort((a,b) => {
      console.log(a);
      console.log(b);
      console.log('sorting');
      if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name ){
          return 1;
        }
        return 0;
    })
  }

  return (
    <Router>
      <div className="backgroundImg" >
        <Navbar/>
        <input className='textbox' type='text' value={searchTerm} onChange={handleSearch}/>
        <Table headings={headings} rows={rows} searchTerm={searchTerm} sortByName={sortByName}/>
      </div>
    </Router>
  );
}

export default App;