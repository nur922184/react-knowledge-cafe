import PropTypes from "prop-types"; 
import BookMark from "../BookMark/BookMark";
const BookMarks = ({bookMarks, redingTime}) => {
    return (
        <div className="md:w-1/3 bg-violet-100">
            <div className="p-2 rounded-full">
                <h3 className="text-4xl text-center mb-10 p-5 border-2"> Reading Time: {redingTime}</h3>
            </div>
            <h1 className="text-3xl mb-5 text-center mt-5">Book Marks Blogs: {bookMarks.length} </h1>
            {
                bookMarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>  )
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.object.isRequired,
    redingTime:PropTypes.number.isRequired
}
export default BookMarks;