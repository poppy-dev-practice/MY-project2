import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({setSearch,search}) => {
  return (
    <nav className='Nav'>
       <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor='search'>searchpost</label>
          <input id="search" type="text" placeholder='search your feed' value={search} onChange={(e)=>setSearch(e.target.value)}/>
       </form>
       <ul>
        <li>
          <Link  to="/" >Home</Link>
        </li>
        <li>
          <Link to="/post">New Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
       </ul>
    </nav>
  )
}

export default Nav