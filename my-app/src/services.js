export const getIssues = (username, repoName, setErrorMsg, setErrClassName, setIssues, value) => {
    fetch(`https://api.github.com/repos/${username}/${repoName}/issues`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                setErrorMsg(data.message);
                setErrClassName('error');
                return;
            }
            if (data.length === 0) {
                setErrorMsg('This repository has no issues');
                setErrClassName('error');
                return;
            }
            setErrClassName('');
            setIssues(data);
        });
};

export const getComments = (url, setComments, history) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.length === 0) {
                alert('This issue has no comments');
                return;
            }
            setComments(data);
            history.push('/comments');
        });
};