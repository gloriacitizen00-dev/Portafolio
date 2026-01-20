const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const moods = [
  { colors: ["#bde0fe", "#cdb4db"], speed: 0.3 },
  { colors: ["#ffbe0b", "#fb5607"], speed: 0.8 },
  { colors: ["#4361ee", "#4cc9f0"], speed: 0.2 },
  { colors: ["#ff006e", "#8338ec", "#3a86ff"], speed: 1.4 }
];

// elegir uno aleatorio al cargar
const mood = moods[Math.floor(Math.random()*moods.length)];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let t = 0;

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const { colors, speed } = mood;
  const cx = canvas.width/2, cy = canvas.height/2;
  const r = Math.min(canvas.width, canvas.height)/2 - 40;

  for(let i=0;i<60;i++){
    const x = Math.sin(t*0.01+i)*r + cx;
    const y = Math.cos(t*0.013+i)*r + cy;
    ctx.fillStyle = colors[i % colors.length];
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.arc(x,y,6,0,Math.PI*2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  t += speed;
  requestAnimationFrame(draw);
}
draw();
