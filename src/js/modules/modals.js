"use strct";
const modals = (state) => {

    function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);

        const modal = document.querySelector(modalSelector);

        const close = modal.querySelector(closeSelector);
        const allModals = document.querySelectorAll("[data-modal]");

        allModals.forEach(modal => {
            modal.style.display = "none";
        });

        trigger.forEach(e => {
            e.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                switch (triggerSelector) {
                    case ".popup_calc_button":
                        console.log(".popup_calc_button");
                        console.log(state.width);
                        if (state.width == false || state.height == false) {
                            document.querySelector("#width").style.border = "1px solid red";
                            document.querySelector("#height").style.border = "1px solid red";
                        } else {
                            allModals.forEach(modal => {
                                modal.style.display = "none";
                            });
                            modal.style.display = "block";
                            document.body.style.overflow = "hidden";
                        }
                        break;



                }
                // allModals.forEach(modal => {
                //     modal.style.display = "none";
                // });
                // modal.style.display = "block";
                // document.body.style.overflow = "hidden";
                
                // if (triggerSelector==".popup_calc_button"){
                //     if (state.width==false|| state.height==false){
                //         const statusMessage = document.createElement("div");
                //         statusMessage.classList.add("status");
                //         statusMessage.textContent = "Заполните данные";

                //     }
                // }
                // allModals.forEach(modal => {
                //     modal.style.display = "none";
                // });
                // modal.style.display = "block";
                // document.body.style.overflow = "hidden";
            });
        });

        modal.addEventListener("click", e => {
            if (e.target == modal && closeClickOverlay) {
                allModals.forEach(modal => {
                    modal.style.display = "none";
                });
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
        close.addEventListener("click", () => {
            allModals.forEach(modal => {
                modal.style.display = "none";
            });
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
    bindModals(".popup_calc_btn", ".popup_calc", ".popup_calc_close", false);
    bindModals(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
    bindModals(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
    //showModalByTime(".popup", 60000);


};


export default modals;
