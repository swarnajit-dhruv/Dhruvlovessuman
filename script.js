document.addEventListener("DOMContentLoaded", () => {

  // Get elements
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const cat = document.getElementById("cat");
  const message = document.getElementById("message");
  const music = document.getElementById("bgMusic");

  // Safety check
  if (!yesBtn || !noBtn || !cat) {
    console.error("Required elements not found");
    return;
  }

  // NO button runs away
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  // YES button clicked
  yesBtn.addEventListener("click", () => {

    message.innerText = "Yayyy! I knew you'd say YES! 💖🥰";

    // Change image
