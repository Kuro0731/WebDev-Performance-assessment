// Home Page Script
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Console greeting
  console.log("Welcome to Coty Wood's Portfolio Site!");
});

// Resume Script - only run if element exists
const dateDiv = document.getElementById("current-date");
if (dateDiv) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  dateDiv.textContent = `${today}`;
}

// Resume Script
/*const dateDiv = document.getElementById('current-date');
const today = new Date().toLocaleDateString();
dateDiv.textContent = `Today's Date: ${today}`;


console.log("Resume loaded successfully!");


document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('motivation-audio');

  function tryPlayAudio() {
    
    audio.play().catch((error) => {
      console.log("Playback was blocked by browser:", error);
    });
  }

  function setupAudioLoop() {
    tryPlayAudio(); 
    setInterval(() => {
      tryPlayAudio(); 
    }, 60000);
  }

  
  document.addEventListener('click', function once() {
    setupAudioLoop();
    document.removeEventListener('click', once); 
  });
});
*/
