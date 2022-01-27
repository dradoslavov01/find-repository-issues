import './Issue.scss';
import greenCheck from '../../../assets/check.png';


const Issue = (props) => {

    return (
        <div className="container-issue">
            <div className="issue-info">
                <img src={greenCheck} className="greenCheck-img" alt="greenCheck" />
                <p className="issue-title" onClick={props.onClick}>{props.title}</p>
            </div>
            {props.assignee ?
                <div className="issue-assignee">
                    <p className="issue-assignee-name">{props.assignee}</p>
                    <img className="issue-assignee-img" src={props.avatar} alt="assignee" />
                </div>
                : null
            }
        </div>

    );
}


export default Issue;