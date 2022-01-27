import './ShowIssues.scss';
import Issue from './Issue/Issue';
import { connect } from 'react-redux';
import { setComments } from '../../redux/reducer';
import { getComments } from '../../services';


const ShowIssues = (props) => {

    const comments = (commentsUrl) => {
        getComments(commentsUrl, props.setComments, props.history);
    };

    return (
        <div className="container-issues">
            <div className="header">
                <p className="header-title">Title</p>
                <p className="header-assignee">Assignee</p>
            </div>
            {props.issues ?
                props.issues.map(issue => {
                    return (
                        <Issue onClick={() => comments(issue.comments_url)} key={issue.id} title={issue.title} assignee={issue.assignee ? issue.assignee.login : null} avatar={issue.assignee ? issue.assignee.avatar_url : null} />
                    );
                })
                : null
            }
        </div>
    );
}

const mapToStateToProps = state => {
    return {
        issues: state.issues
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setComments: (comments) => dispatch(setComments(comments))
    };
};

export default connect(mapToStateToProps, mapDispatchToProps)(ShowIssues);