const tabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(`.${tabsSelector}`);
    const content = document.querySelectorAll(contentSelector);

    // console.log(header);
    // console.log(tabs);
    console.log(content[0]);

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
        if (event.target && event.target.classList.contains(tabsSelector)) {
            console.log(event.target);
            tabs.forEach((element, i) => {
                if (element == event.target) {
                    tabs.forEach(item => {
                        item.classList.remove(activeClass);
                    });
                    console.log(i);
                    closeTabs();
                    openTab(i);
                }
            });

        }
    });




};

export default tabs;
