
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'
import Header from './Component/Header/Header'

function App() {
  const [bookMarks, setBookMarks ]= useState([])
  const [redingTime , setRedingtime] = useState(0)

  const handleAddToBookMark = blog=>{
    const newBookmark = [...bookMarks, blog]; 
    setBookMarks (newBookmark)
  }
  
  const handleMarkARead = time =>{
   const newTimeset = redingTime  + time; 
   console.log(typeof redingTime, typeof  time)
   setRedingtime (newTimeset)
  }

  return (
    <>
     <Header></Header>

     <div className='md:flex gap-5 max-w-6xl mx-auto mt-10'>
     <Blogs handleAddToBookMark ={handleAddToBookMark} handleMarkARead={handleMarkARead}></Blogs>
     <BookMarks bookMarks = {bookMarks} redingTime = {redingTime} ></BookMarks>
     </div>
    </>
  )
}

export default App
