const canvas = document.getElementById("bannerCanvas");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width);
    canvas.height = Math.floor(rect.height);
  }

  window.addEventListener("resize", resize);
  resize();

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  const circles = [];
  const CIRCLE_COUNT = 18;

  for (let i = 0; i < CIRCLE_COUNT; i++) {
    circles.push({
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      r: rand(10, 30),
      vx: rand(-0.7, 0.7),
      vy: rand(-0.7, 0.7)
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach((c) => {
      c.x += c.vx;
      c.y += c.vy;

      if (c.x - c.r < 0 || c.x + c.r > canvas.width) c.vx *= -1;
      if (c.y - c.r < 0 || c.y + c.r > canvas.height) c.vy *= -1;

      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(47, 107, 255, 0.12)";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}