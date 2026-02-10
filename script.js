const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const cat = document.getElementById("cat");
const music = document.getElementById("bgMusic");
const countdown = document.getElementById("countdown");

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  noBtn.style.transform =
    `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
});

// YES clicked
yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yayyy! I knew you'd say yes! 💖🥰";
  cat.src = "./cat-heart.gif";
  music.play();
  launchConfetti();
  launchHearts();
  fireworks();
});

// CONFETTI
function launchConfetti(){
  for(let i=0;i<150;i++){
    const c = document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.backgroundColor=`hsl(${Math.random()*360},100%,70%)`;
    c.style.animationDuration=Math.random()*3+2+"s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
}

// HEARTS
function launchHearts(){
  for(let i=0;i<50;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=Math.random()*3+2+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),5000);
  }
}

// FIREWORKS
function fireworks(){
  launchConfetti();
  setTimeout(launchConfetti,400);
  setTimeout(launchConfetti,800);
}

// COUNTDOWN
setInterval(()=>{
  const target = new Date("Feb 14, 2026 00:00:00");
  const now = new Date();
  const diff = target - now;

  if(diff > 0){
    const days = Math.floor(diff / 86400000);
    countdown.innerHTML = `Valentine's Day in ${days} days 💘`;
  }
},1000);

