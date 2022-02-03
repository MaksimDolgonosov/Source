import checkNumInputs from "./checkNumInputs";
const changeModalState = (state) => {
    const windowForm = document.querySelectorAll(".balcon_icons_img");
    const windowWidth = document.querySelectorAll("#width");
    const windowHeight = document.querySelectorAll("#height");
    const windowType = document.querySelectorAll("#view_type");
    const windowProfile = document.querySelectorAll(".checkbox");

    checkNumInputs("#width");
    checkNumInputs("#height");

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                if (elem.lenght > 1) {
                    state[prop] = i;
                } else {
                    state[prop] = item.value;
                }

                console.log(state);
            });
        });
    }

    bindActionToElems("click", windowForm, "form");
    bindActionToElems("input", windowWidth, "width");
    bindActionToElems("input", windowHeight, "height");
    bindActionToElems("change", windowType, "type");
    bindActionToElems("change", windowProfile, "profile");


};

export default changeModalState;