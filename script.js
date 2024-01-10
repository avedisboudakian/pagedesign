document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.dot');
    const overlayText = document.querySelector('.overlay-text');

    const contents = [
        { 
            title: "NBA GOATs",
            text: "Legends like Michael Jordan, LeBron James, and Kobe Bryant have defined the greatness in NBA history.",
            link: "link-to-detailed-page-1.html" 
        },
        { 
            title: "Dirk Nowitzki",
            text: "A revolutionary player known for his unique playstyle and loyalty to the Dallas Mavericks.",
            link: "link-to-detailed-page-2.html" 
        },
        { 
            title: "Jayson Tatum",
            text: "An emerging superstar for the Boston Celtics, known for his scoring ability and athleticism.",
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
