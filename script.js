document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.dot');
    const overlayText = document.querySelector('.overlay-text');

    const contents = [
        { 
            title: "CERMAIC COATING",
            text: "Legends like Michael Jordan, LeBron James, and Kobe Bryant have defined the greatness in NBA history.",
            link: "link-to-detailed-page-1.html" 
        },
        { 
            title: "$39.99 MONTHLY WASHES",
            text: "RECIEVE THAT SPECIAL CAR CARE ON A MONTLY BASIS WITH OUR 'WE COME TO YOU' MEMBERSHIP",
            link: "link-to-detailed-page-2.html" 
        },
        { 
            title: "WE COME TO YOU",
            text: "WE OFFER MOBILE AUTO DETAILING! VIEW OUR DETAILING PACKAGES:",
            link: "link-to-detailed-page-3.html" 
        },
        // Add more content as needed
    ];

    function updateCarousel(newIndex) {
        images[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        images[newIndex].classList.add('active');
        dots[newIndex].classList.add('active');

        overlayText.innerHTML = `
            <h2>${contents[newIndex].title}</h2>
            <p>${contents[newIndex].text}</p>
            <a href="${contents[newIndex].link}" class="learn-more">Learn More</a>
        `;

        currentIndex = newIndex;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });
    
    // Carousel timer
    setInterval(() => {
        let newIndex = currentIndex + 1;
        if (newIndex >= images.length) newIndex = 0;
        updateCarousel(newIndex);
    }, 2000); // Changes every 2 seconds

    // Initialize with the first item
    updateCarousel(0);
});
