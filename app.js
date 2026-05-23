const header = document.querySelector('header');
let lastScrollY = window.scrollY;

    const locomotiveScroll = new LocomotiveScroll();

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // 1. Handle background color (White after 50px)
    if (currentScrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // 2. Handle Hide/Show logic
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down - Hide Header
        header.classList.add('header-hidden');
    } else {
        // Scrolling Up - Show Header
        header.classList.remove('header-hidden');
    }

    // Update last scroll position
    lastScrollY = currentScrollY;
});


const preloadImages = (urls) => {
    urls.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};


document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const section = document.querySelector(".third-section");

    const images = [...boxes]
        .map(box => box.dataset.bg)
        .filter(Boolean);

    preloadImages(images);

    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            const bg = box.dataset.bg;
            if (!bg) return;

            section.style.setProperty("--fade", "0");

            setTimeout(() => {
                section.style.setProperty("--bg-img", `url("${bg}")`);
                section.style.setProperty("--fade", "1");
            }, 200);
        });
    });
});

