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
