import './Comment.scss';


const Comment = (props) => {
    return (
        <div className="container-comment">
            <div className="header">
                <div className="header-info">
                    <p className="header-info-author">Author</p>
                    <p className="header-info-author-name">{props.author}</p>
                </div>
                <p className="header-commented">commented</p>
            </div>
            <p className="container-comment-content">
               {props.body}
            </p>
        </div>
    );
}


export default Comment;