const tabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(`.${tabsSelector}`);
    const content = document.querySelectorAll(contentSelector);



    openTab();

    function openTab(i = 0) {
        content[i].style.display = "block";
        tabs[i].classList.add(activeClass);
    }

    function closeTabs() {
        content.forEach(e => {
            e.style.display = "none";
        });
        tabs.forEach(e => {
            e.classList.remove(activeClass);
        });
    }

    header.addEventListener("click", event => {
        if (event.target &&
            (event.target.classList.contains(tabsSelector) ||
                event.target.parentNode.classList.contains(tabsSelector))) {
            tabs.forEach((element, i) => {
                if (element == event.target || element == event.target.parentNode) {
                    closeTabs();
                    openTab(i);
                }
            });

        }
    });




};

export default tabs;
