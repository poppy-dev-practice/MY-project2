import React from 'react'
import {Link} from "react-router-dom"

const Misssing = () => {
  return (
    <main className='Missing'>
      <>
           <h2>Post not found</h2>
           <p>well,thats disappointed</p>
           <p>
            <Link to="/">vist our website</Link>
           </p>
      </>
    </main>
  )
}

export default Misssing