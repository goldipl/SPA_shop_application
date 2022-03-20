//Router file

export const Router = (endpoint) => {
    let currentURL = window.location.href;

    window.history.replaceState({}, currentURL, `${endpoint}`);
}
