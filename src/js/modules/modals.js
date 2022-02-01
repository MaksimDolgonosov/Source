"use strct";
const modals = () => {

    function bindModals(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = modal.querySelector(closeSelector);

        trigger.forEach(e => {
            e.addEventListener("click", (e) => {
                e.preventDefault();
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });
        modal.addEventListener("click", e => {
            if (e.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
        close.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        });

    }


    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModals(".popup_engineer_btn", ".popup_engineer", ".popup_close");
    bindModals(".phone_link", ".popup", ".popup_close");
    //showModalByTime(".popup", 60000);


};


export default modals;