const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const response = document.getElementById('response');

function startConfetti() {
  const confettiSettings = { target: 'my-canvas', resize: true };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setTimeout(() => {
    confetti.clear();
  }, 5000); // Stop after 5 seconds
}

yesBtn.addEventListener('click', () => {
  response.innerHTML = "Yay! You made me the happiest person! 💖";
  startConfetti();
});

noBtn.addEventListener('click', () => {
  const phrases = [
    "Are you sure? 😢",
    "Really? Think again! 🥺",
    "You can't say no! 😤",
    "I'll keep asking! 🙏",
    "Pretty please? 🥰",
    "You're breaking my heart! 💔",
    "Just click yes already! 😘"
  ];
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  response.innerHTML = randomPhrase;
  noBtn.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
});