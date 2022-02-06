const images = () => {
    const imgPopup = document.createElement("div");
    const workClass = document.querySelector(".works");
    const bigImg = document.createElement("img");

    imgPopup.classList.add("popup");
    workClass.appendChild(imgPopup);

    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";
    imgPopup.style.display = "none";
    imgPopup.appendChild(bigImg);

    workClass.addEventListener("click", e => {
        e.preventDefault();
        if (e.target && e.target.classList.contains("preview")) {
            imgPopup.style.display = "flex";
            document.body.style.overflow = "hidden";
            const srcImage = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute("src", srcImage);

        }
        if (e.target && e.target.classList.contains("popup")) {
            imgPopup.style.display = "none";
            document.body.style.overflow = "";
        }
    });
};
export default images;