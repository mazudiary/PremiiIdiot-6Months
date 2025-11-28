# 💖 6 Months Anniversary Website 💕

<div align="center">

![Love](https://img.shields.io/badge/Made%20With-Love-ff69b4?style=for-the-badge&logo=heart)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

*A romantic anniversary website celebrating 6 months of love, memories, and dreams* ✨

[View Demo](#) • [Features](#-features) • [Setup](#-setup) • [Customize](#-customize)

</div>

---

## 💝 About

This is a special anniversary website created to celebrate **6 months of love** with my Premii. Built with pure HTML, CSS, and JavaScript, it features:

- 🎨 **Beautiful Animations** - Gradient flows, floating hearts, glowing effects
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🗺️ **Interactive Map** - Showing the distance between Dhaka and Noakhali
- ⏱️ **Live Countdown** - Real-time counter since our last meeting
- 💌 **Love Quotes Carousel** - Rotating romantic messages
- 🔒 **Password Protected** - Secure entry page with session management
- 📖 **Dynamic Story** - Content loaded from JSON for easy updates
- 🔄 **Session Storage** - One-time password entry per session

---

## ✨ Features

### 🎭 Password Page (`index.html`)
- 🔐 Password authentication (code: `20026`)
- 🔄 **Session Management** - Auto-login after first entry
- 👁️ Show/hide password toggle
- 💡 Helpful password hints
- 🎭 Custom error modal with animations
- 💕 Falling hearts background animation
- ✨ Glowing gradient effects
- 🛡️ Protected access - redirects if session not found

### 🎉 Main Anniversary Page (`6months.html`)
- 📅 **Day Counter** - Days since June 17, 2025
- 🖼️ **Hero Image** - Floating/bouncing hero photo
- 📍 **Timeline** - Relationship milestones and memories
- 📐 **Distance Formula** - Live calculation: `190 km × seconds of missing you`
- 🗺️ **Google Maps** - Embedded route with romantic styling
- 💬 **Quotes Carousel** - 7 rotating love quotes (5-second intervals)
- 📸 **Photo Memories** - 4 memory cards (Silly Moments, Songs, Texts, Letters)
- ⏰ **Live Countdown** - Months, Days, Hours, Minutes, Seconds since August 7, 2025
- 📖 **Love Story** - Personal messages loaded from JSON
- 🎵 **Background Music** - Autoplay romantic audio

---

## 🚀 Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JS (for customization)

### Installation

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/mazudiary/6months-anniversary.git
   cd 6months-anniversary
   ```

2. **File Structure**:
   ```
   📁 PremiiIdiot-6Months/
   ├── 📄 index.html          # Password entry page
   ├── 📄 6months.html        # Main anniversary page
   ├── 📁 assets/
   │   ├── 📁 css/
   │   │   ├── index.css      # Password page styles
   │   │   └── 6month.css     # Main page styles
   │   ├── 📁 js/
   │   │   ├── index.js       # Password & session logic
   │   │   └── 6months.js     # Main page scripts
   │   ├── 📁 data/
   │   │   └── story.json     # Story content (JSON)
   │   └── 📁 images/
   │       └── laneline.png   # Hero image
   └── 📄 README.md           # This file
   ```

3. **Open in Browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

4. **Enter Password**: `20026` (only required once per session!)

---

## 🔐 Session Management

### How It Works
- **First Visit**: Enter password `20026` on the landing page
- **Session Created**: Password stores a session flag in browser
- **Auto-Login**: Return visits during the same browser session automatically redirect to the main page
- **Session Expires**: Closes when browser/tab is closed, requiring password again
- **Direct Access Blocked**: Attempting to access `6months.html` directly redirects to password page

### Benefits
✅ Enhanced user experience - no repeated logins  
✅ Secure access control  
✅ Session-based protection  
✅ Automatic cleanup on browser close

---

## 🎨 Customize

### Change Password
Edit `assets/js/index.js`, find the `checkPass()` function:
```javascript
function checkPass() {
    const p = document.getElementById("pass").value;
    if (p === "20026") { // ← Change this password
        sessionStorage.setItem('visited', 'true');
        window.location.href = "6months.html";
    } else {
        showModal();
    }
}
```

### Update Story Content
Edit `assets/data/story.json`:
```json
{
  "title": "Our Love Story",
  "paragraphs": [
    "Your first paragraph here...",
    "Your second paragraph here..."
  ],
  "closing": {
    "text": "Forever yours — Your Name",
    "style": "text-align:center; font-size:22px; color:#ffbde7;"
  }
}
```

### Change Dates
Edit `assets/js/6months.js`, update these dates:
```javascript
const startDate = new Date("2025-06-17");      // Relationship start
const lastMeet = new Date("2025-08-07T12:50:00"); // Last meeting
```

### Modify Colors
In `assets/css/6month.css`, find and replace color codes:
- `#ff70c4` - Primary pink
- `#ff9cd8` - Light pink
- `#ffb3e6` - Lighter pink
- `#1a0d1f` - Dark purple background

### Add More Quotes
Edit `assets/js/6months.js`, find the `quotes` array:
```javascript
const quotes = [
    "Your quote here...",
    "Another quote...",
    // Add more!
];
```

### Clear Session (Logout)
To clear the session and require password again:
```javascript
// In browser console or add a logout button
sessionStorage.removeItem('visited');
// Or clear all session data
sessionStorage.clear();
```

---

## 📱 Responsive Design

The website is fully responsive with three breakpoints:

| Device | Width | Features |
|--------|-------|----------|
| 📱 Mobile | ≤480px | Simplified layout, 2-column grid |
| 📱 Tablet | ≤768px | Single-column cards, optimized spacing |
| 💻 Desktop | >1024px | Full features, animations, effects |

---

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Animations, gradients, flexbox, grid
- **JavaScript (ES6+)** - Dynamic content, timers, fetch API, session storage
- **Google Fonts** - Poppins font family
- **Google Maps Embed API** - Interactive map display
- **Session Storage API** - Browser session management

---

## 💡 Tips & Tricks

### Adding Your Own Photo
Replace `assets/images/laneline.png` with your photo (recommended: 500x500px, square format)

### Changing Background Music
Edit the audio element in `6months.html`:
```html
<audio autoplay loop>
    <source src="your-music-url.mp3" type="audio/mpeg">
</audio>
```

### Adding More Memory Cards
In `6months.html`, duplicate a `.memory-card` div and customize:
```html
<div class="memory-card">
    <div class="memory-icon">🎵</div>
    <h3>Your Title</h3>
    <p>Your description here</p>
</div>
```

### Disable Session (Always Require Password)
Remove session logic from `assets/js/index.js` and `assets/js/6months.js`:
```javascript
// Remove these lines:
sessionStorage.setItem('visited', 'true');
// And the session check on page load
```

---

## 🎯 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |

---

## 📝 License

This project is created with 💖 for personal use. Feel free to use it as inspiration for your own anniversary projects!

---

## 💌 Credits

**Created by:** Your Mazu, Your 20026  
**For:** My Premii, My Pakhiii, My Bibijan  
**Date:** June 17, 2025 - Forever

---

<div align="center">

### 💖 Made with endless love and countless hours of coding 💖

*"Six months with you feels like six chapters of infinity.  
And I want the whole book with only you."*

---

**⭐ If you love this, give it a star! ⭐**

</div>
