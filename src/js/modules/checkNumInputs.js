const checkNumInputs = (selector) => {
    const inputForms = document.querySelectorAll(selector);

    inputForms.forEach(number => {
        number.addEventListener("input", () => {
            number.value = number.value.replace(/\D/g, "");
        });
    });

};

export default checkNumInputs;