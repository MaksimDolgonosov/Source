const forms = () => {
    const form = document.querySelectorAll("form");
    const input = document.querySelectorAll("input");
    const message = {
        loading: "Идет отправка",
        success: "Отправлено",
        failure: "Ошибка"
    };

    form.forEach(e => {
        bindPostData(e);
    });

    const postData = async (url, data) => {

        const res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };


    function bindPostData(form) {
        form.addEventListener("submit", element => {
            element.preventDefault();
            let statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            statusMessage.textContent = message.loading;
            form.append(statusMessage); //appendChild-?
            const formData = new FormData(form);
            postData("http://localhost/Source/src/", formData)
                .then(data => {
                    console.log(data);
                    document.querySelector(".status").textContent = message.success;
                    statusMessage.remove();
                }).catch(() => {
                    document.querySelector(".status").textContent = message.failure;
                    console.log("Fail");
                }).finally(() => {
                    form.reset();
                });


        });
    }




};

export default forms;