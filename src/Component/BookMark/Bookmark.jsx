import PropTypes from "prop-types";

const BookMark = ({bookmark}) => {

    const {title, post_data }=bookmark;

    return (
        <div className="border-2 border-cyan-800 p-4 m-4 rounded-xl">
            <h3 className="text-2xl">{title}</h3> 
            <p>{post_data}</p>
        </div>
    );
};
BookMark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default BookMark;