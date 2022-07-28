import React, { useState} from 'react'
// import Avatar from '@mui/material/Avatar';
// import {deepPurple } from '@mui/material/colors';

export default function Navbar() {
  const [search, setSearch] = useState('');
//   const [items, setItems] = useState([])

//   const filter = search.length === 0 ? items
// : items.filter(item =>                         
//  item.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button className="btn btn-outline-success"  type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </nav>
    </>
  )
}
