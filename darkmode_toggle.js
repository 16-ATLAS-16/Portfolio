
/**
 * Toggles dark mode when called, responsible for handling the cookies.
 * If darkmode cookie does not exist, it creates it. (default darkmode = true)
 */
async function toggleDarkMode () {
    var isDarkMode = await cookieStore.get('darkMode');
    if (isDarkMode === null) {
        //await cookieStore.set('darkMode', true);
        isDarkMode = true;
    }

    //await cookieStore.set('darkmode', !isDarkMode);
    setDarkMode(!isDarkMode);
}

/**
 * Sets the dark mode state on the page
 * @param {boolean} state 
 */
function setDarkMode(state) {
    const body = document.getElementById('body');
    const darkmodeCheckbox = document.getElementById('darkmode-toggle');

    if (state) {
        body.classList.add('bg-dark');
    } else {
        body.classList.remove('bg-dark');
    }
    darkmodeCheckbox.checked = state;
}