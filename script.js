document.addEventListener("DOMContentLoaded",()=>{

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const cat = document.getElementById("cat");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const countdown = document.getElementById("countdown");

/* NO runs away */
noBtn.addEventListener("mouseover",()=>{
  const x = Math.random()*200-100;
  const y = Math.random()*200-100;
  noBtn.style.transform=`translate(${x}px,${y}px)`;
});

/* YES */
yesBtn.addEventListener("click",()=>{
  message.innerHTML="Yayyy! I knew you'd say yes! 💖🥰";
  cat.src="./cat-heart.png";
  music.play();
  confetti();
  hearts();
});

/* CONFETTI */
function confetti(){
  for(let i=0;i<120;i++){
    const c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.backgroundColor=`hsl(${Math.random()*360},100%,70%)`;
    c.style.animationDuration=Math.random()*3+2+"s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
}

/* HEARTS */
function hearts(){
  for(let i=0;i<40;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=Math.random()*3+2+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),5000);
  }
}

/* COUNTDOWN */
setInterval(()=>{
  const target=new Date("Feb 14, 2026 00:00:00");
  const now=new Date();
  const diff=target-now;
  if(diff>0){
    const days=Math.fl
