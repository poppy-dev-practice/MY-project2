import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({posts}) => {
  return (
    <main className='Home'>
       {posts.length ? (posts.map((el)=>(
        <article className='post' key = {el.id}>
            <>
            <Link to={`/post/${el.id}`}>
            <h2>{el.title}</h2>
            <p className='postDate'>{el.datetime}</p>
            </Link>
            <p className='postBody'>{(el.body)>=25 ? el.body:`${(el.body).slice(0,25)}......`}</p>
            </>
        </article>
       ))):<>
       <p style={{marginTop:"0.5rem"}}> Add your thoughts !!click new post</p>
        </>}
    </main>
  )
}

export default Home