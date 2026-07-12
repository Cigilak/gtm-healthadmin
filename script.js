/* =====================================
   Wait for Page to Load
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeCounters();

    initializeChart();

    initializeDarkMode();

    initializeAnimations();

    initializeButtons();

});

/* =====================================
   KPI Counter Animation
===================================== */

function animateCounter(id, target, prefix = "", suffix = "") {

    const element = document.getElementById(id);

    let current = 0;

    const increment = target / 100;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.innerHTML =
            prefix +
            Math.floor(current).toLocaleString() +
            suffix;

    }, 20);

}

function initializeCounters() {

    animateCounter("providers", 5868);

    animateCounter("claims", 91890);

    animateCounter("AnnualgrowthRate", 13,"","%");

    animateCounter("revenue", 973.4,"$","M");

}

/* =====================================
   Chart.js Dashboard
===================================== */

function initializeChart() {

    const ctx = document.getElementById("growthChart");

    new Chart(ctx, {

        type: "line",

        data: {

            labels: [

                "Jan",

                "Feb",

                "Mar",

                "Apr",

                "May",

                "Jun"

            ],

            datasets: [{

                label: "Claims Submitted",

                data: [

                    18000,

                    24000,

                    35000,

                    46000,

                    59000,

                    76000

                ],

                borderColor: "#1565c0",

                backgroundColor: "rgba(21,101,192,.15)",

                borderWidth: 3,

                fill: true,

                tension: .4

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: true

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}

/* =====================================
   Dark Mode
===================================== */

function initializeDarkMode() {

    const button = document.getElementById("themeButton");

    button.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

    });

}

/* =====================================
   Scroll Animations
===================================== */

function initializeAnimations() {

    const cards = document.querySelectorAll(

        ".card, .persona, .security-card, .feature, .phase, .kpi"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: .15

        }

    );

    cards.forEach(card => {

        card.classList.add("hidden");

        observer.observe(card);

    });

}

/* =====================================
   Hero Buttons
===================================== */

function initializeButtons() {

    const primary = document.querySelector(".primary");

    primary.addEventListener("click", function () {

        document
            .getElementById("overview")
            .scrollIntoView({

                behavior: "smooth"

            });

    });

    const secondary = document.querySelector(".secondary");

    secondary.addEventListener("click", function () {

        document
            .getElementById("security")
            .scrollIntoView({

                behavior: "smooth"

            });

    });

}

/* =====================================
   Active Navigation Highlight
===================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") === "#" + current

        ) {

            link.classList.add("active");

        }

    });

});

/* =====================================
   Console Welcome Message
===================================== */

console.log(

"Healthcare Claims GTM Portfolio Loaded Successfully"

);