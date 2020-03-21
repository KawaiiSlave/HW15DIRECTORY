import React from 'react';
import Cell from '../Cell/Cell.js';
import './style.css';

const Table = props => {
  const { headings, rows, searchTerm, sortByName } = props
  console.log(sortByName);
  const theadMarkup = () => {
    return headings.map(heading=>{
      return <th>{heading}</th>
    })
  }

  const tbodyMarkup = () => {

    return rows.filter(row=> row.name.includes(searchTerm) || row.ethnicity.includes(searchTerm) || row.eContact.includes(searchTerm)).map(row => {
      return (
        <tr>
          <td onClick={sortByName}>{row.name}</td>
          <td>{row.age}</td>
          <td>{row.ethnicity}</td>
          <td>{row.phone}</td>
          <td>{row.eContact}</td>
        </tr>
      )
    })
  }

  return (
    <table className="Table">
      <thead><tr>{theadMarkup()}</tr></thead>
      <tbody>{tbodyMarkup()}</tbody>
      <img src="" />
    </table>
  )
}

export default Table
