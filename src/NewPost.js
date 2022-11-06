import React from 'react'

const NewPost = ({handlesubmit,addnewitemstitle,setAddNewItemsTitle,addnewitemsbody,setAddNewItemsBody}) => {
  return (
    <main className='NewPost'>
      <form className='newPostForm' onSubmit={handlesubmit}>

       <label htmlFor='postTitle'>Title:</label>
       <input required id='postTitle' type="text" value={addnewitemstitle} onChange={(e)=>setAddNewItemsTitle(e.target.value)}/>

       <label htmlFor='postBody'>Body:</label>
       <textarea required id='postBody' value={addnewitemsbody} onChange={(e)=>setAddNewItemsBody(e.target.value)}/>
       <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost