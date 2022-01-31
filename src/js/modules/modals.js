"use strct";
const modals = () => {

    function bindModals(trigger, modal, close) {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();

        });
    }
    bindModals(".popup_engineer_btn", ".popup_engineer");
};


export default modals;