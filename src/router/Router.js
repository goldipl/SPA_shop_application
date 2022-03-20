//Router file

export const urlPath = (endpoint) => {
    let currentURL = window.location.href;

    window.history.replaceState({}, currentURL, `${endpoint}`);
}

urlPath();