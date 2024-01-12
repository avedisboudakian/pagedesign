document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.dot');
    const overlayText = document.querySelector('.overlay-text');

    const contents = [
        {
            title: "CERAMIC COATING",
            text: "",
            link: "link-to-detailed-page-1.html", 
            points: ["DURABILITY & EASY MAINTENACE", "GLOSSES PAINT", "BLOCKS CONTAMINIANTS"]
        },
        { 
            title: "$39.99 MONTHLY WASHES",
            text: "RECEIVE THAT SPECIAL CAR CARE ON A MONTHLY BASIS WITH OUR 'WE COME TO YOU' MEMBERSHIP",
            link: "link-to-detailed-page-2.html",
            points: ["CONVENIENCE & FLEXIBILITY", "4+ WASHES A MONTH", "VEHICLE INCENTIVES"] 
        },
        { 
            title: "WE COME TO YOU",
            text: "WE OFFER MOBILE AUTO DETAILING! VIEW OUR DETAILING PACKAGES:",
            link: "link-to-detailed-page-3.html",
            points: [] 
        },
        // Add more content as needed
    ];

    function updateCarousel(newIndex) {
        images[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        images[newIndex].classList.add('active');
        dots[newIndex].classList.add('active');

        // Building the bullet points HTML string
        let bulletPointsHtml = '<ul class="carousel-bullets">';
        contents[newIndex].points.forEach(point => {
            bulletPointsHtml += `<li>${point}</li>`;
        });
        bulletPointsHtml += '</ul>';

        overlayText.innerHTML = `
            <div class="text-wrapper">
                <h2>${contents[newIndex].title}</h2>
                <p>${contents[newIndex].text}</p>
            </div>
            ${bulletPointsHtml} <!-- Insert bullet points here -->
            <a href="${contents[newIndex].link}" class="learn-more">LEARN MORE</a>
        `;

        currentIndex = newIndex;
    }
    const clickHereButton = document.querySelector('.click-here');

    // Check if the button exists to avoid errors
    if (clickHereButton) {
        clickHereButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action (navigation)
            window.location.href = 'https://your-squarespace-site.com/your-page'; // Replace with your desired URL
        });
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
    }, 5000); // Changes every 10 seconds

    // Initialize with the first item
    updateCarousel(0);
});
