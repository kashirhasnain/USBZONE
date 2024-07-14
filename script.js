document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const checkoutPopup = document.querySelector(".checkout-popup");
    const closeButton = document.querySelector(".close-button");
    const cancelCheckoutButton = document.querySelector(".cancel-checkout");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            checkoutPopup.classList.remove("hidden");
            document.querySelector("main").classList.add("disabled");
        });
    });

    closeButton.addEventListener("click", () => {
        checkoutPopup.classList.add("hidden");
        document.querySelector("main").classList.remove("disabled");
    });

    cancelCheckoutButton.addEventListener("click", () => {
        checkoutPopup.classList.add("hidden");
        document.querySelector("main").classList.remove("disabled");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Extracting form data
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Simple form validation
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Display the popup
        popup.style.display = "block";

        // Optionally, you can clear the form after submission
        contactForm.reset();
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    const checkoutPopup = document.getElementById("checkout-popup");
    const thankYouPopup = document.getElementById("thank-you-popup");
    const closeBtns = document.querySelectorAll(".close-btn");
    const checkoutForm = document.getElementById("checkout-form");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            checkoutPopup.style.display = "block";
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            checkoutPopup.style.display = "none";
            thankYouPopup.style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target == checkoutPopup) {
            checkoutPopup.style.display = "none";
        }
        if (event.target == thankYouPopup) {
            thankYouPopup.style.display = "none";
        }
    });

    checkoutForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Extracting form data
        const formData = new FormData(checkoutForm);
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const address = formData.get("address");
        const cardInfo = formData.get("card-info");

        // Simple form validation
        if (!firstname || !lastname || !address || !cardInfo) {
            alert("Please fill in all fields.");
            return;
        }

        // Hide the checkout popup and show the thank you popup
        checkoutPopup.style.display = "none";
        thankYouPopup.style.display = "block";

        // Optionally, you can clear the form after submission
        checkoutForm.reset();
    });
});
