import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Contact from './components/Contact'
export default class extends Component {
  render() {
    return (
      
    <div className='flex justify-between'>
    <div className='flex flex-col p-[40px] m-[30px] border h-[90vh] w-[40%] border-[#333] text-2xl gap-[10px]'>
      <Link className='border border-[2px] border-[#333] p-[5px] ' to="/">Home</Link>
      <Link  className='border border-[2px] border-[#333] p-[5px]' to="/blog">Blog </Link>
      <Link  className='border border-[2px] border-[#333] p-[5px]' to="/contact">Contact</Link>
    </div>
        <div className='w-[50%] border h-[90vh] border-[5px] border-[#343134] p-[40px] m-[30px]'>
        <Routes > 
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
    )
  }
}
