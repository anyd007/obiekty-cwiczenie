const popupMain = document.querySelector('.popup')
let popupResult = document.querySelector('.show-score');
const popupFuelInput = document.querySelector('.fuel-price');
const popupAverageInput = document.querySelector('.average-price');
const popupTripInput = document.querySelector('.trip-price');
const acceptBtn = document.querySelector('.accept-btn');
const openPopupBtn = document.querySelector('.open-popup');
const closePopupBtn = document.querySelector('.close-btn')





const showResult = () =>{
    if(popupFuelInput.value !== '' && popupAverageInput.value !== '' && popupTripInput.value !== ''){
        let show = ((popupAverageInput.value * popupTripInput.value) / 100) * popupFuelInput.value
        popupResult.textContent = `uśredniony koszt twojej trasy to: ${show} PLN.`
    }else{
        popupResult.textContent = 'wszyskie pola są obowiązkowe do oblicznie kosztów podróży'
    }
}




acceptBtn.addEventListener('click', showResult);
openPopupBtn.addEventListener('click', ()=>{
    popupMain.style.display = 'flex'
})
closePopupBtn.addEventListener('click', () =>{
    popupMain.style.display = 'none'
})
