function setTheme() {
    let theme = localStorage.getItem("theme");
    if(theme=="dark") {
        document.querySelector(':root').style.setProperty('--background', '#071E22');
        document.querySelector(':root').style.setProperty('--text', '#F4F4F9');
        document.querySelector(':root').style.setProperty('--header', '#02090a');
        document.getElementById("theme").src = "images/sun.png";
    }
}

function changeTheme() {
    let theme = localStorage.getItem("theme");
    if (theme=="dark") {
        document.querySelector(':root').style.setProperty('--background', '#F4F4F9');
        document.querySelector(':root').style.setProperty('--text', '#071E22');
        document.querySelector(':root').style.setProperty('--header', '#3c3e3f');
        document.getElementById("theme").src = "images/moon.png"
        localStorage.setItem("theme", "light")
    }
    else {
        document.querySelector(':root').style.setProperty('--background', '#071E22');
        document.querySelector(':root').style.setProperty('--text', '#F4F4F9');
        document.querySelector(':root').style.setProperty('--header', '#02090a');
        document.getElementById("theme").src = "images/sun.png"
        localStorage.setItem("theme", "dark")
    }
}