import Comment from './Comment/Comment';
import { connect } from 'react-redux';
import './ShowComments.scss';
import gitHubIcon from '../../assets/github-icon.png';

const ShowComments = (props) => {
    return (
        <div className="container-comments">
            <img className="icon" src={gitHubIcon} alt="github-icon" />
            <p className="text">Comments</p>
            {props.comments ?
                props.comments.map(comment => {
                    return (
                        <Comment key={comment.node_id} comments={props.comments} author={comment.user.login} body={comment.body} />
                    );
                })
                : null
            }
        </div>
    );
}


const mapToStateToProps = state => {
    return {
        comments: state.comments
    };
};

export default connect(mapToStateToProps)(ShowComments);