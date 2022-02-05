const timer = (endtime) => {

    //let endtime = "2022-03-07";
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor(t / (1000 * 60 * 60) % 24);
        let minutes = Math.floor(t / (1000 * 60) % 60);
        let seconds = Math.floor(t / 1000 % 60);
        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function setClock(endtime) {
        let timer = document.querySelector(".numbers1");
        let days = timer.querySelector("#days");
        let hours = timer.querySelector("#hours");
        let minutes = timer.querySelector("#minutes");
        let seconds = timer.querySelector("#seconds");
        let timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            let t = getTimeRemaining(endtime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            // if (t.total <= 0) {
            //     clearInterval(timeInterval);
            //     days.textContent = "00";
            //     hours.textContent = "00";
            //     minutes.textContent = "00";
            //     seconds.textContent = "00";
            // }

        }
    }

    setClock(endtime);

    function getZero(i) {
        if (i >= 10) {
            return i;
        } else {
            return `0${i}`;
        }

    }
};





export default timer;