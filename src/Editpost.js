import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Editpost = ({posts,handledit,edittitle,setEditTitle,editbody,setEditBody}) => {
  const {id} = useParams()
  const post = posts.find((el)=>(el.id).toString() === id)

  useEffect(()=>{
    if(post){
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  },[post,setEditBody,setEditTitle])

  return (
    <main className='NewPost'>
      <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>

      {(edittitle || editbody ) && 
        <>
       <label htmlFor='postTitle'>Title:</label>
       <input required id='postTitle' type="text" value={edittitle} onChange={(e)=>setEditTitle(e.target.value)}/>

       <label htmlFor='postBody'>Body:</label>
       <textarea required id='postBody' value={editbody} onChange={(e)=>setEditBody(e.target.value)}/>
       <button type="submit" onClick={()=>handledit(post.id)}>Submit</button>
       </>
       
       }

       {(!edittitle && !editbody) && <p> feeds not found </p>}
      </form>
    </main>
  )
}

export default Editpost