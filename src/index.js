import "./styles/styles.css";

const elements = {
    header: document.querySelector("header"),
    projects: document.getElementById("container-projects"),
    btnContact: document.getElementById("btn-contact"),
    btnToTop:document.getElementById("btn-to-top")
}

const Events = () => {
    /* let lastScrollY = window.scrollY; */
    let lastScrollTop = 0;
    const scrollThreshold = 15; 

    elements.btnToTop.addEventListener("click", () => {
        document.querySelector("body").scrollIntoView({ behavior: "smooth" });
        const heading = document.querySelector("h1");
        heading.setAttribute("tabindex", "-1");
        heading.focus();
    })

    elements.btnContact.addEventListener("click", () => {
        document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll < 0) return; 

        if (Math.abs(currentScroll - lastScrollTop) < scrollThreshold) {
          return;
        }

        if (currentScroll > lastScrollTop) {
          elements.header.classList.add('hidden');
        } else {
          elements.header.classList.remove('hidden');
        }
        lastScrollTop = currentScroll;
    }, { passive: true });

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