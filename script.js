const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thank-you");

const submitBtn = document.getElementById("submit");
const rateAgainBtn = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
  thanksCard.classList.remove("hidden");
  ratingCard.style.display = "none";
});
rateAgainBtn.addEventListener("click", () => {
  ratingCard.style.display = "block";
  thanksCard.classList.add("hidden");
});

const rate = rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
