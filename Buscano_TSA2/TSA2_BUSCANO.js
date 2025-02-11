document.addEventListener("DOMContentLoaded", function () {
    function showBox(dayClass) {
        document.querySelectorAll(".box-container div").forEach(box => {
            box.classList.remove("active");
        });

        const selectedBox = document.querySelector(`.box-${dayClass}`);
        if (selectedBox) {
            selectedBox.classList.add("active");
        }
    }

    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function () {
            const dayClass = this.classList[1].split("-")[1]; 
            showBox(dayClass);
        });
    });
});

