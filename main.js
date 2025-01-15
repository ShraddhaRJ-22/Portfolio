/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const closeIcon = document.getElementById("nav-close");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
    });
});

closeIcon.addEventListener("click", () => {
    navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

// Initialize theme based on localStorage
if (localStorage.getItem("mode") === "dark") {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener("click", () => {
    if (localStorage.getItem("mode") === "light") {
        darkMode();
    } else {
        lightMode();
    }
});

function darkMode() {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
let tabs = document.querySelectorAll('.tab');
let indicator = document.querySelector('.indicator');
const allCards = document.querySelectorAll(".work_card");
const uiuxCards = document.querySelectorAll(".uiux");
const appCards = document.querySelectorAll(".app");
const brandingCards = document.querySelectorAll(".branding");

// Initialize indicator position for the first tab
indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

// Initially show all cards
allCards.forEach(card => {
    card.style.display = "block";
});

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";

        tabs.forEach(t => t.classList.remove("text-whiteColor"));
        tab.classList.add("text-whiteColor");

        const tabVal = tab.getAttribute("data-tabs");

        allCards.forEach(card => {
            card.style.display = "none";
        });

        if (tabVal === "uiux") {
            uiuxCards.forEach(card => {
                card.style.display = "block";
            });
        } else if (tabVal === "branding") {
            brandingCards.forEach(card => {
                card.style.display = "block";
            });
        } else if (tabVal === "app") {
            appCards.forEach(card => {
                card.style.display = "block";
            });
        } else {
            // "All" tab clicked, show all cards
            allCards.forEach(card => {
                card.style.display = "block";
            });
        }
    });
});

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
    const navbar = document.getElementById("navbar");
    const aTag  = document.querySelectorAll("nav ul li a");
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger   = document.getElementById("hamburger");
    const logo = document.getElementById("logo");
    const whitelogo = document.getElementById("white-logo");

    if (window.scrollY >= 200) {
        navbar.classList.add("bg-primaryColor");
        aTag.forEach((item) => {
            item.classList.add("text-whiteColor");
        })

        themeToggle.classList.add("text-whiteColor");
        hamburger.classList.add("text-whiteColor");
    } else {
        navbar.classList.remove("bg-primaryColor");
        aTag.forEach((item) => {
            item.classList.remove("text-whiteColor");
        })

        themeToggle.classList.remove("text-whiteColor");
        hamburger.classList.remove("text-whiteColor");
    }
};

// Add event listener to window scroll event
window.addEventListener('scroll', scrollHeader);

// Call the function initially to set the header style based on the initial scroll position
scrollHeader();

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollup = () => {
    const scrollupBtn = document.getElementById("scrollup");

    if (this.scrollY >= 250) {
        scrollupBtn.classList.remove("-bottom-1/2");
        scrollupBtn.classList.add("bottom-4");
    } else {
        scrollupBtn.classList.remove("-bottom-1/2");
        scrollupBtn.classList.add("bottom-4");
    }
};

window.addEventListener("scroll", scrollup)


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "hero";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if(this.scrollV >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove('active');
        if(item.href.includes(current)) {
            item.classList.add('active');
        }
    })
}


  