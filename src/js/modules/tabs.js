const tabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabsSelector);
    const content = document.querySelectorAll(contentSelector);

    console.log(header);
    header.addEventListener("click", event => {
        if (event.target && event.target.classList.contains(tabsSelector)) {
            console.log(event.target);
        }
    });




};

export default tabs;