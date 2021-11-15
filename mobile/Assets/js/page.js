function myFunction() {
    const theme = document.querySelector("#theme-link");

    if (theme.getAttribute("href") == "../Assets/css/light-mode.css") {
        theme.href = "../Assets/css/dark-mode.css";
    }

    else {
        theme.href = "../Assets/css/light-mode.css";
    }
}
