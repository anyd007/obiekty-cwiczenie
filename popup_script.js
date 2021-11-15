const popupMain = document.querySelector(".popup");
let popupResult = document.querySelector(".show-score");
let allInputs = document.querySelectorAll("input");
const popupFuelInput = document.querySelector(".fuel-price");
const popupAverageInput = document.querySelector(".average-price");
const popupTripInput = document.querySelector(".trip-price");
const acceptBtn = document.querySelector(".accept-btn");
const openPopupBtn = document.querySelector(".open-popup");
const closePopupBtn = document.querySelector(".close-btn");

const showResult = () => {
  allInputs.forEach((inps) => {
    if (inps.value === "") {
      inps.style.backgroundColor = "red";
    } else {
      inps.style.backgroundColor = "white";
    }
  });
  if (
    popupAverageInput.value !== "" &&
    popupTripInput.value !== "" &&
    popupFuelInput.value !== ""
  ) {
    let show =
      ((popupAverageInput.value * popupTripInput.value) / 100) *
      popupFuelInput.value;
    popupResult.textContent = `uśredniony koszt twojej trasy to: ${Math.floor(
      show
    ).toFixed(2)} PLN.`;
  } else {
    popupResult.textContent =
      "wszyskie pola są obowiązkowe do oblicznie kosztów podróży";
  }
};
allInputs.forEach(inps =>{
    inps.addEventListener('keyup', e =>{
        if(e.key === 'Enter'){
            showResult()
        }
    })
})

acceptBtn.addEventListener("click", showResult);

openPopupBtn.addEventListener("click", () => {
  popupMain.style.display = "flex";
});
closePopupBtn.addEventListener("click", () => {
  popupMain.style.display = "none";
  popupAverageInput.value = ""
    popupTripInput.value = "" 
    popupFuelInput.value = ""
    allInputs.forEach((inps) => inps.value = inps.style.backgroundColor = "white");
    popupResult.textContent = "";
});

