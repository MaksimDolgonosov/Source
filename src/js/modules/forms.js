import checkNumInputs from "./checkNumInputs";
const forms = () => {
    const form = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");
    // const inputForms = document.querySelectorAll("input[name='user_phone']");

    checkNumInputs("input[name='user_phone']");


    const message = {
        loading: "Идет отправка...",
        success: "Спасибо, мы скоро с вами свяжемся!",
        failure: "Упс! что то пошло не так..."
    };

    form.forEach(e => {
        bindPostData(e);
    });

    const postData = async (url, data) => {
        document.querySelector(".status").textContent = message.loading;
        const res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };

    function clearInputs() {
        inputs.forEach(e => {
            e.value = "";
        });
    }


    function bindPostData(form) {
        form.addEventListener("submit", element => {
            element.preventDefault();
            const statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            //statusMessage.textContent = message.loading;
            form.append(statusMessage); //appendChild-?
            const formData = new FormData(form);
            postData("assets/server.php", formData)
                .then(data => {
                    console.log(data);
                    statusMessage.textContent = message.success;
                }).catch(() => {
                    statusMessage.textContent = message.failure;
                    console.log("Fail");
                }).finally(() => {
                    form.reset();
                    // clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });


        });
    }




};

export default forms;