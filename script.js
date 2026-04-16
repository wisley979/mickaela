const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

sim.addEventListener("click", () => {
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("principal").classList.remove("hidden");
});

nao.addEventListener("mouseover", () => {
  nao.style.position = "absolute";
  nao.style.top = Math.random() * window.innerHeight + "px";
  nao.style.left = Math.random() * window.innerWidth + "px";
});

/* CORAÇÕES SUBINDO */
function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(criarCoracao, 300);