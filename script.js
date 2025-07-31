function nextPage(page) {
  const pages = document.querySelectorAll(".container");
  pages.forEach(p => p.classList.add("hidden"));
  document.getElementById(`page${page}`).classList.remove("hidden");

  // Jalankan confetti saat buka surat (halaman 3)
  if (page === 3) {
    showConfetti();
  }
}

function showConfetti() {
  for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.opacity = Math.random();
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}
