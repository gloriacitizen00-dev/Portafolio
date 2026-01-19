const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

let mood = "calm";

const moods = {
  calm: {
    colors: ["#bde0fe", "#cdb4db"],
    speed: 0.3
  },
  joy: {
    colors: ["#ffbe0b", "#fb5607"],
    speed: 0.8
  },
  sadness: {
    colors: ["#4361ee", "#4cc9f0"],
    speed: 0.2
  },
  chaos: {
    colors: ["#ff006e", "#8338ec", "#3a86ff"],
    speed: 1.4
  }
};

document.querySelectorAll("button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    mood = btn.dataset.mood;
  });
});

let t = 0;

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  const { colors, speed } = moods[mood];

  for(let i=0;i<60;i++){
    const x = Math.sin(t*0.01+i)*160+210;
    const y = Math.cos(t*0.013+i)*160+210;

    ctx.fillStyle = colors[i % colors.length];
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.arc(x,y,6,0,Math.PI*2);
    ctx.fill();
  }

  t += speed;
  requestAnimationFrame(draw);
}

draw();
