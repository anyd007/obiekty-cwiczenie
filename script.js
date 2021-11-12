const show = document.createElement("h2");
const show2 = document.createElement("h2");
const view = document.createElement("img");
const newUl = document.createElement("ul");
let newLi
newUl.style.textAlign = 'center'
document.body.append(view);
document.body.append(newUl);
document.body.append(show);
document.body.append(show2);

// const fuelCost = 6;
// const oferta = {
//   marka: "Kia",
//   model: "Carens",
//   cena: 60000,
//   fuelCost,
//   koszt100km() {
//     return this.spalanie * fuelCost;
//   },
//   wiekSamochodu: function() {
//     let data = new Date().getFullYear()
//     let year = data - this.age
//     if(year == 1){
//         year = `${year} rok`
//     }else if(year >1 && year <5){
//         year = `${year} lata`
//     }else{
//         year = `${year} lat`
//     }
//     return year;
//   },
// };
// oferta.spalanie = 8;
// oferta.age = 2000;
// show.textContent = `spalanie za 100km jazdy to : ${oferta.koszt100km()} zł`;
// show2.textContent = `wiek twojego auta to: ${oferta.wiekSamochodu()}`
let cost = 6;
class Offer {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  fuelCost() {
    show.textContent = `srednia cena za przejechane 100km to`;
  }
}
class BetterOffer extends Offer {
  constructor(name, model, price, year, fuel) {
    super(name, model, price);
    this.fuel = fuel;
    this.year = year;
  }
  awarydge() {
    return this.fuel * cost;
  }
}
// const newCar = new BetterOffer("Maluch", "126p", 2000, 9.5, 1990);
// show.textContent = `mój samochód to ${newCar.marka}, jest z roku ${newCar.rok} i spala ${newCar.spalanie} l/100km`;
// show2.textContent = `koszt przejechania 100km to  ${newCar.awarydge()} zł`;
// console.log(newCar);
// console.log("-----------------------------");

const Sale = {
  offer1: new BetterOffer("volvo", "s60", 59000, 2014),
  offer2: new BetterOffer("peugot", "607", 8000, 2005),
  offer3: new BetterOffer("audi", "a3", 29000, 2012),
  offer4: new BetterOffer("maluch", "126p", 1000, 1989),
  offer5: new BetterOffer("bmw", "m5", 99000, 2020),
};

for (const wypiszOferte in Sale) {
  newLi = document.createElement("li");
  let btn = document.createElement("button");
  newUl.append(newLi);
  newUl.append(btn);
  btn.id += Sale[wypiszOferte].name;
  btn.textContent = Sale[wypiszOferte].name;
  newLi.textContent +=
    `to jest samochód marki ${Sale[wypiszOferte].name}` + "\n";
  newLi.textContent += Sale[wypiszOferte].model + "\n";
  newLi.textContent += `rok produkcji to ${Sale[wypiszOferte].year}` + "\n";
  newLi.textContent += `cena to ${Sale[wypiszOferte].price} zł`;
}
view.style.display = "flex";
const showAuto = (e) => {
  console.log(view);
  if (e.target.matches("#volvo")) {
    view.setAttribute("src", "img/Volvo-S60-2014.jpg");
    view.setAttribute("id", "volvo");
  } else if (e.target.matches("#peugot")) {
    view.setAttribute("src", "img/peugeot-607.jpg");
    view.setAttribute("id", "peugot");
  } else if (e.target.matches("#audi")) {
    view.setAttribute("src", "img/audi-a3.jpg");
    view.setAttribute("id", "audi");
  } else if (e.target.matches("#maluch")) {
    view.setAttribute("src", "img/fiat-126p.jpg");
    view.setAttribute("id", "maluch");
  } else if (e.target.matches("#bmw")) {
    view.setAttribute("src", "img/BMW-M5-6.jpg");
    view.setAttribute("id", "bmw");
  }
};
const newWindow = (e) => {
  if (e.target.matches("#volvo")) {
    window.open("img/Volvo-S60-2014.jpg");
  } else if (e.target.matches("#peugot")) {
    window.open("img/peugeot-607.jpg");
  } else if (e.target.matches("#audi")) {
    window.open("img/audi-a3.jpg");
  } else if (e.target.matches("#maluch")) {
    window.open("img/fiat-126p.jpg");
  } else if (e.target.matches("#bmw")) {
    window.open("img/BMW-M5-6.jpg");
  }
};

newUl.addEventListener("click", showAuto);
view.addEventListener("click", newWindow);


// const x = document.createElement('ul');
// document.body.append(x)
// const test2 =()=>{
//     for(let i=0; i<=5; i++){
//         let y = document.createElement('li');
//         x.append(y);
//         y.textContent += i+1
//     }
// }
// test2()
