document.addEventListener("DOMContentLoaded", function () {
  const coin = document.getElementById("coin");
  const button = document.getElementById("flipBtn");
  const list = document.getElementById("list");

  button.addEventListener("click", function () {
    const result = Math.random() < 0.5 ? "HEAD" : "TAILS";

    // Animate coin flip
    coin.style.transform = "rotateY(180deg)";
    setTimeout(() => {
      coin.textContent = result;
      coin.style.transform = "rotateY(0deg)";
    }, 300);

    // Update result list
    list.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = result;
    list.appendChild(li);
  });
});
