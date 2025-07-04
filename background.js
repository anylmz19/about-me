
const canvas = document.getElementById("canvasArkaPlan");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const kodlar = [
  "{", "}", "[", "]", "(", ")", "<", ">", "=", "==", "===",
  "+", "-", "*", "/", "%", "!", "!=", "!==", "&&", "||",
  ";", ":", ",", ".", "->", "::", "=>",

  "let", "const", "var", "function", "return", "if", "else", "for", "while",
  "do", "switch", "case", "break", "continue", "try", "catch", "finally",
  "throw", "new", "this", "class", "extends", "super",

  "import", "export", "from", "as", "default", "await", "async", "yield",

  "int", "float", "double", "char", "string", "bool", "void", "struct",
  "typedef", "include", "#define", "#include",

  "print", "input", "console.log", "document", "window", "querySelector",
  "setTimeout", "setInterval", "Math", "random", "length", "push", "pop"
];
let mouse = { x: null, y: null };
let particles = [];
const particleCount = 90;

class KodNoktasi {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.text = kodlar[Math.floor(Math.random() * kodlar.length)];
    this.size = 14 + Math.random() * 8;
    this.isClicked = false;
    this.hovered = false;
    this.angle = 0;
  }

  hareket() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

 ciz() {
  ctx.font = `${this.size}px monospace`;

  // Daha yumuşak ve az parlaklık
  ctx.fillStyle = this.hovered
    ? "rgba(0, 255, 200, 0.86)"   // hafif parlak
    : "rgba(0, 255, 149, 0.36)"; // soluk

  ctx.shadowColor = this.hovered ? "rgba(0, 255, 255, 0.3)" : "transparent";
  ctx.shadowBlur = this.hovered ? 4 : 0;

  ctx.fillText(this.text, this.x, this.y);

  if (this.isClicked) {
    const radius = 18;
    this.angle += 0.05;

    for (let i = 0; i < 8; i++) {
      const angle = this.angle + i * (Math.PI * 2) / 8;
      const cx = this.x + Math.cos(angle) * radius;
      const cy = this.y + Math.sin(angle) * radius;

      ctx.beginPath();
      ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#00ffff";
      ctx.fill();
    }
  }

  ctx.shadowBlur = 0; // sıfırla
}

  checkHover(mx, my) {
    const dx = this.x - mx;
    const dy = this.y - my;
    this.hovered = Math.sqrt(dx * dx + dy * dy) < 15;
  }

  checkClick(mx, my) {
    const dx = this.x - mx;
    const dy = this.y - my;
    if (Math.sqrt(dx * dx + dy * dy) < 15) {
      this.isClicked = true;
    }
  }
}

function baglantilariCiz() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        let opacity = 1 - dist / 120;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 255, 150, ${opacity * 0.3})`;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }

    // Mouse'a bağlı çizgi
    const dxMouse = particles[i].x - mouse.x;
    const dyMouse = particles[i].y - mouse.y;
    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
    if (distMouse < 150) {
      let opacity = 1 - distMouse / 150;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  }
}

function animasyon() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    p.hareket();
    p.ciz();
  }
  baglantilariCiz();
  requestAnimationFrame(animasyon);
}

function baslat() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new KodNoktasi());
  }
  animasyon();
}

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  for (let p of particles) {
    p.checkHover(mouse.x, mouse.y);
  }
});

document.addEventListener("click", (e) => {
  for (let p of particles) {
    p.checkClick(e.clientX, e.clientY);
  }
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

baslat();