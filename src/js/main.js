
import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
    modals();
    tabs(".glazing_slider", "glazing_block");
    tabs(".decoration_slider", "internal_link");
});