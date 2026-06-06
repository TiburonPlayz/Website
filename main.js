// =======================================
// TiburonPlayz Gaming Community
// Main JavaScript File
// =======================================

document.addEventListener("DOMContentLoaded", () => {

```
initializeMobileMenu();
initializeForms();
initializeScrollAnimations();
initializeCardEffects();
initializeShopSystem();
```

});

// =======================================
// MOBILE NAVIGATION
// =======================================

function initializeMobileMenu() {

```
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (!menuBtn || !navLinks) return;

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

});
```

}

// =======================================
// FORM HANDLING
// =======================================

function initializeForms() {

```
const forms = document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        showNotification(
            "Thank you! Your submission has been received."
        );

        form.reset();

    });

});
```

}

// =======================================
// NOTIFICATION SYSTEM
// =======================================

function showNotification(message) {

```
const notification = document.createElement("div");

notification.className = "notification";

notification.innerHTML = `
    <span>${message}</span>
`;

document.body.appendChild(notification);

setTimeout(() => {
    notification.classList.add("show");
}, 100);

setTimeout(() => {

    notification.classList.remove("show");

    setTimeout(() => {

        notification.remove();

    }, 400);

}, 3500);
```

}

// =======================================
// SCROLL ANIMATIONS
// =======================================

function initializeScrollAnimations() {

```
const cards = document.querySelectorAll(
    ".card, .stat-card"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("fade-in");

            }

        });

    },

    {
        threshold: 0.15
    }

);

cards.forEach(card => {

    observer.observe(card);

});
```

}

// =======================================
// CARD EFFECTS
// =======================================

function initializeCardEffects() {

```
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});
```

}

// =======================================
// SHOP SYSTEM FOUNDATION
// =======================================

let cart = [];

function initializeShopSystem() {

```
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    const text = button.textContent.toLowerCase();

    if(
        text.includes("cart") ||
        text.includes("buy") ||
        text.includes("subscribe")
    ){

        button.addEventListener("click", () => {

            const productCard =
                button.closest(".card");

            if(!productCard) return;

            const productName =
                productCard.querySelector("h3")
                ?.textContent || "Product";

            addToCart(productName);

        });

    }

});
```

}

function addToCart(product) {

```
cart.push(product);

showNotification(
    `${product} added to cart`
);

console.log("Cart:", cart);
```

}

function getCartCount() {

```
return cart.length;
```

}

function clearCart() {

```
cart = [];

console.log("Cart cleared");
```

}

// =======================================
// SMOOTH SCROLL LINKS
// =======================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

```
anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target =
        document.querySelector(
            this.getAttribute("href")
        );

    if(target){

        target.scrollIntoView({

            behavior: "smooth"

        });

    }

});
```

});
