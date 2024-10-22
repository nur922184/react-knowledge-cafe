
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookMark, handleMarkARead}) => {
const [blogs, setBlogs] = useState([]);

    useEffect ( ()=>{
        fetch ('bloge.json')
        .then (res => res.json())
        .then(data => setBlogs(data))
    } , [])

    return (
        <div className="md:w-2/3">
        {/* <h1 className="text-4xl">Blogs: {blogs.length}</h1> */}
        {
            blogs.map(blog=> <Blog 
                handleMarkARead ={handleMarkARead}
                handleAddToBookMark ={ handleAddToBookMark}
                key={blog.id} 
                blog={blog}>
                
                </Blog> )
        }

        </div>
    );
};
Blogs.propTypes={
    handleAddToBookMark: PropTypes.func.isRequired, 
    handleMarkARead:PropTypes.func.isRequired
   }
export default Blogs;