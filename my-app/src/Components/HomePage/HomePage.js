import './HomePage.scss';
import { React, useState, useEffect } from 'react';
import gitHubIcon from '../../assets/github-icon.png';
import { getIssues } from '../../services'
import { connect } from 'react-redux';
import { setIssues } from '../../redux/reducer';

const HomePage = (props) => {

    const [errorMsg, setErrorMsg] = useState(null);
    const [errClassName, setErrClassName] = useState('');
    const [inputValue, setInputValue] = useState();

    useEffect(() => {
        const value = localStorage.getItem('value');

        if (value && value !== undefined) {
            const [username, repoName] = value.split(' ');
            getIssues(username, repoName, setErrorMsg, setErrClassName, props.setIssues);
            setInputValue(value);
        };

    }, [props.setIssues, inputValue]);


    const showInfo = (e) => {
        e.preventDefault();
        const value = e.target.input.value;
        const [username, repoName] = value.split(' ');

        if (value !== '') {
            getIssues(username, repoName, setErrorMsg, setErrClassName, props.setIssues, value);
            setErrorMsg(null);
            localStorage.setItem('value', value);

        } else {
            setErrorMsg('The field cannot be empty');
            setErrClassName('error');
        }
    };

    const onChange = (e) => {
        if (localStorage.getItem('value')) {
            localStorage.clear();
            setInputValue(null);
        }
    }

    return (
        <div className="container-home-page">
            <img src={gitHubIcon} alt="github icon" />
            <p className="text">Enter GitHub username and repository name</p>
            <p className="error-msg">{errorMsg}</p>
            <form className="form-container" onSubmit={showInfo} autoComplete='off'>
                <input className={`input-field ${errClassName}`} onChange={onChange} value={inputValue} type="text" name="input" placeholder="Search..." />
                <button className="btn-search">Show issues</button>
            </form>
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
        setIssues: (issues) => dispatch(setIssues(issues))
    };
};

export default connect(mapToStateToProps, mapDispatchToProps)(HomePage);