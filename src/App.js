import Layout from "./layout"
import {Route,Routes, useNavigate} from 'react-router-dom'
import Home from "./Home"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import About from "./About"
import Missing from "./Misssing"
import {useEffect, useState} from "react"
import {format} from "date-fns"
import Editpost from "./Editpost"

function App() {


////input
const[posts,SetPosts] = useState(JSON.parse(localStorage.getItem("feeds"))||[])
const [search,setSearch] = useState("")
const [addnewitemstitle,setAddNewItemsTitle] = useState("")
const [addnewitemsbody,setAddNewItemsBody] = useState("")
const navigate = useNavigate()
const [searchresult,SetSearchResult] = useState([])
const [edittitle ,setEditTitle] = useState("")
const [editbody ,setEditBody] = useState("")


////function
  ///////for localstrorage
 useEffect(()=>{
  localStorage.setItem("feeds",JSON.stringify(posts))
 },[posts])


useEffect(()=>{
  const filteritems = posts.filter((el)=>((el.body).toLowerCase().includes(search.toLowerCase()))|| ((el.title).toLowerCase().includes(search.toLowerCase())))
  SetSearchResult(filteritems.reverse())
},[posts,search])



const handleDelete =(id)=>{
  let deletepannu = posts.filter((el)=>el.id !== id)
  SetPosts(deletepannu)
  navigate("/")
}




const handlesubmit=(e)=>{
  e.preventDefault()
  const id = posts.length?posts[posts.length-1].id+1:1
  const datetime = format(new Date(),"MMMM, dd yyyy pp") 
  let newpost = {id,datetime,title:addnewitemstitle,body:addnewitemsbody}
  let allpost = [...posts,newpost]
  SetPosts(allpost)
  setAddNewItemsTitle("")
  setAddNewItemsBody("")
  navigate("/")
   


  }


  const handledit =(id)=>{
     console.log("varenda");
     const datetime = format(new Date(),"MMMM, dd yyyy pp") 
     let editpost = {id,datetime,title:edittitle,body:editbody}
     SetPosts(posts.map((el)=>el.id === id? {...editpost}:el))
     setEditBody("")
     setEditTitle("")
     navigate("/")
  }




  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout title="ingenieur blogs" search={search} setSearch={setSearch}/>}>
          <Route index element={<Home posts={searchresult} />}/>
          <Route path="post">
            <Route index element={<NewPost addnewitemstitle={addnewitemstitle} setAddNewItemsTitle={setAddNewItemsTitle} handlesubmit={handlesubmit} addnewitemsbody={addnewitemsbody} setAddNewItemsBody={setAddNewItemsBody}/>}/>
            <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete} />}/>
          </Route>
          <Route path="edit">
            <Route path=":id" element={<Editpost edittitle={edittitle} setEditTitle={setEditTitle}  editbody={editbody} setEditBody={setEditBody} posts={posts} handledit={handledit}/>}/>
          </Route>
        <Route path="About" element={<About/>}/>
        <Route path="*" element={<Missing/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
