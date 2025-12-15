// Check session protection - redirect if not visited through password page
if (!sessionStorage.getItem('visited')) {
    window.location.href = "index.html";
}

// Load story from JSON
    async function loadStory() {
        try {
            const response = await fetch('assets/data/story.json');
            const storyData = await response.json();
            const storySection = document.getElementById('storySection');
            
            // Clear existing content
            storySection.innerHTML = '';
            
            // Add title if exists
            if (storyData.title) {
                const title = document.createElement('h2');
                title.textContent = storyData.title;
                title.style.cssText = 'text-align:center; color:#ff9cd8; margin-bottom:2rem;';
                storySection.appendChild(title);
            }
            
            // Add paragraphs
            storyData.paragraphs.forEach(text => {
                const p = document.createElement('p');
                p.textContent = text;
                storySection.appendChild(p);
            });
            
            // Add closing
            if (storyData.closing) {
                const closing = document.createElement('p');
                closing.innerHTML = storyData.closing.text.replace(' — ', '...<br> ');
                closing.style.cssText = storyData.closing.style;
                storySection.appendChild(closing);
            }
        } catch (error) {
            console.error('Error loading story:', error);
            // Fallback content
            document.getElementById('storySection').innerHTML = `
                <p>My Premii, my Pakhiii, my Bibijan...today marks 6 months of us.  
                A long-distance love stronger than 190 km, stronger than time.</p>
            `;
        }
    }
    
    // Load story on page load
    loadStory();

    function updateMissingSeconds() {
        const lastMeet = new Date("2025-08-07T12:50:00");
        const now = new Date();
        const diffTime = now - lastMeet;
        
        // Calculate days and total distance
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const totalSeconds = days * 86400; // 24 * 60 * 60
        const totalDistance = 190 * totalSeconds;
        
        // Update displays with formatted numbers
        document.getElementById("daysSinceMeet").textContent = days.toLocaleString();
        document.getElementById("totalDistance").textContent = totalDistance.toLocaleString();
    }
    
    // Update immediately and then every second
    updateMissingSeconds();
    setInterval(updateMissingSeconds, 1000);


    const startDate = new Date("2025-06-17");
    const today = new Date();
    const diffTime = today - startDate;
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("dayCounter").innerHTML =
        "We have been together for <b>" + days + "</b> beautiful days 💖";

    // Love Quotes Rotation
    const quotes = [
        "Distance means so little when someone means so much.",
        "We were friends first that's why we became everything to each other.",
        "Every second apart, I'm counting the moments until we're together again.",
        "You are my today and all of my tomorrows.",
        "In you, I've found the love of my life and my closest, truest friend.",
        "190 km can't measure the depth of my love for you.",
        "My heart is and always will be yours, no matter the distance."
    ];
    
    let quoteIndex = 0;
    function rotateQuote() {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        document.getElementById('quoteText').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('quoteText').textContent = quotes[quoteIndex];
            document.getElementById('quoteText').style.opacity = 1;
        }, 500);
    }
    setInterval(rotateQuote, 5000);
    
    // Countdown Timer - Updates every second
    function updateCountdown() {
        const lastMeet = new Date("2025-12-09T09:42:00");
        const now = new Date();
        const diff = now - lastMeet;
        
        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        const months = Math.floor(totalDays / 30);
        const days = totalDays % 30;
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countMonths').textContent = months;
        document.getElementById('countDays').textContent = days;
        document.getElementById('countHours').textContent = hours;
        document.getElementById('countMinutes').textContent = minutes;
        document.getElementById('countSeconds').textContent = seconds;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000); // Update every second

    // Lightbox Functions
    function openLightbox(img) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const caption = document.getElementById('lightbox-caption');
        
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        caption.textContent = img.alt;
        
        // Prevent body scroll when lightbox is open
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
        
        // Restore body scroll
        document.body.style.overflow = 'auto';
    }

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });