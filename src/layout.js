import React from 'react'
import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'

const layout = ({title,setSearch,search}) => {
  return (
    <>
    <Header title={title}/>
    <Nav search={search} setSearch={setSearch}/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout