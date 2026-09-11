import "./styles/styles.css";

const elements = {
    projects: document.getElementById("container-projects"),

}

const Events = () => {
    elements.projects.addEventListener("mouseover", (e) => {
        showDetails(e)
    })

    elements.projects.addEventListener("focusin", (e) => {
        showDetails(e)
    })

    elements.projects.addEventListener("mouseout", (e) => {
        hideDetails(e)
    })

    elements.projects.addEventListener("focusout", (e) => {
        hideDetails(e)
    })

    function showDetails(e) {
        const window = e.target.closest(".project-preview")

        if (window) {
            const details = window.querySelector(".details")
            details.classList.remove("hide");
            details.classList.add("show");
        }
    }

    function hideDetails(e) {
        const window = e.target.closest(".project-preview")

        if (window) {
            const details = window.querySelector(".details")
            if (!details.classList.contains("show")) return;

            details.classList.remove("show");
            details.classList.add("hide");

            details.addEventListener(
                "animationend",
                () => details.classList.remove("hide"),
                { once: true }
            );
        }
    }

}

Events()