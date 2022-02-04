
import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";

window.addEventListener("DOMContentLoaded", () => {

    const form = { form: 0, width: '0', height: '0', type: 'tree', profile: '' };

    changeModalState(form);
    modals();
    tabs(".glazing_slider", "glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider", "no_click", ".decoration_content > div > div", "after_click");
    tabs(".balcon_icons", "balcon_icons_img", ".popup_calc_content .big_img > img", "do_image_more", "inline-block");
    forms(form);
});