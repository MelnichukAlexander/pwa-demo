const quotes = [
  "Делай сегодня то, что другие не хотят.",
  "Главное — начать!",
  "Ты справишься!",
  "Смотри на цель, а не на препятствия.",
  "Каждый день — новый шанс."
];

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg"
];

function showRandom() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const img = images[Math.floor(Math.random() * images.length)];
  document.getElementById("random-quote").textContent = quote;
  document.getElementById("random-img").src = img;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}
