const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});
navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});
navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

    });
const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});
const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
const contactForm =
    document.getElementById("contactForm");

const successMessage =
    document.getElementById("form-success");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const subject =
            document.getElementById("subject");

        const message =
            document.getElementById("message");


        let isValid = true;
        document
            .querySelectorAll(".input-group")
            .forEach(group => {

                group.classList.remove("error");

            });


        document
            .querySelectorAll(".error-message")
            .forEach(error => {

                error.textContent = "";

            });


        successMessage.classList.remove("show");

        if (name.value.trim() === "") {

            showError(
                name,
                "Please enter your name."
            );

            isValid = false;

        }

        else if (
            name.value.trim().length < 3
        ) {

            showError(
                name,
                "Name must contain at least 3 characters."
            );

            isValid = false;

        }
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email.value.trim() === "") {

            showError(
                email,
                "Please enter your email."
            );

            isValid = false;

        }

        else if (
            !emailPattern.test(
                email.value.trim()
            )
        ) {

            showError(
                email,
                "Please enter a valid email address."
            );

            isValid = false;

        }

        if (subject.value.trim() === "") {

            showError(
                subject,
                "Please enter a subject."
            );

            isValid = false;

        }
        if (message.value.trim() === "") {

            showError(
                message,
                "Please enter your message."
            );

            isValid = false;

        }

        else if (
            message.value.trim().length < 10
        ) {

            showError(
                message,
                "Message must contain at least 10 characters."
            );

            isValid = false;

        }
        if (isValid) {

            successMessage.classList.add("show");

            contactForm.reset();

        }

    }
);
function showError(input, message) {

    const group =
        input.closest(".input-group");

    group.classList.add("error");


    const error =
        group.querySelector(
            ".error-message"
        );

    error.textContent = message;

}
document
    .querySelectorAll(
        ".contact-form input, .contact-form textarea"
    )
    .forEach(input => {

        input.addEventListener(
            "input",
            () => {

                const group =
                    input.closest(".input-group");

                group.classList.remove("error");


                const error =
                    group.querySelector(
                        ".error-message"
                    );

                error.textContent = "";

            }
        );

    });
document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            navMenu.classList.contains("active")
        ) {

            navMenu.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    }
);
