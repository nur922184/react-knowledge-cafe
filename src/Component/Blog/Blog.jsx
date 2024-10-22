import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookMark, handleMarkARead}) => {
    const {title, cover, reading_time, author, post_data, author_img, hashtags} = blog
    return (
        <div className='mb-20'>
            <img className='w-full h-96 mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mt-4 mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14 rounded-full'  src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <h3> {post_data} </h3>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={ ()=> handleAddToBookMark(blog)}
                    className='ml-2 text-2xl font-bold text-black focus:text-red-600'><FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h3 className="text-2xl mb-4">{title}</h3>
            <p className='mb-8'>
                {
                    hashtags.map((hash, idx ) => <span key={idx}><a href=""> {hash} </a></span>)
                }
            </p>
            <button className='text-purple-600 font-bold underline' onClick={()=> handleMarkARead(reading_time)}>Mark As Read </button>
        </div>
    );
};
Blog.propTypes={
 blog: PropTypes.object.isRequired,
 handleAddToBookMark: PropTypes.func.isRequired, 
 handleMarkARead:PropTypes.func.isRequired
}
export default Blog;