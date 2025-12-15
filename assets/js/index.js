// Check session on page load
window.onload = function() {
    if (sessionStorage.getItem('visited') === 'true') {
        // User has already visited, redirect to main page
        window.location.href = "6months.html";
    }
}

function checkPass() {
    const p = document.getElementById("pass").value;
    if (p === "20025") {
        // Set session flag
        sessionStorage.setItem('visited', 'true');
        window.location.href = "6months.html";
    } else {
        showModal();
    }
}

function showModal() {
    document.getElementById("errorModal").style.display = "block";
}

function closeModal() {
    document.getElementById("errorModal").style.display = "none";
    document.getElementById("pass").value = "";
    document.getElementById("pass").focus();
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("errorModal");
    if (event.target == modal) {
        closeModal();
    }
}

function togglePassword() {
    const passInput = document.getElementById("pass");
    const toggleIcon = document.getElementById("toggleIcon");
    
    if (passInput.type === "password") {
        passInput.type = "text";
        toggleIcon.textContent = "🙈";
    } else {
        passInput.type = "password";
        toggleIcon.textContent = "👁️";
    }
}

// Generate falling hearts
function createFallingHeart() {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = ['💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.getElementById('fallingHearts').appendChild(heart);
    
    setTimeout(() => heart.remove(), 10000);
}

// Create hearts periodically
setInterval(createFallingHeart, 800);