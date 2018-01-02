window.onload = () => {
    console.log('Window loaded ....');
    const urlToFetch = 'https://api.github.com/repos/theIYD/functions.js/commits/master';
    fetchGithubAPI(urlToFetch);
};

function fetchGithubAPI(url) {
    const last_commit = document.querySelector('.commit-message');
    const latest_commit_url = document.querySelector('.latest_commit_url');

    axios.get(url)
        .then(response => {
            console.log(response.data)
            last_commit.innerHTML = response.data.sha;
            latest_commit_url.href = response.data.html_url;
        })
        .catch(err => {
            console.log(err);
        });
}