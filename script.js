const show = document.createElement("h2");
const show2 = document.createElement("h2");
const btn = document.querySelector("button");
const newUl = document.createElement("ul");
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
  constructor(name, model, price, fuel, year) {
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
  offer1: new BetterOffer("volvo", "s60", 30303),
  offer2: new BetterOffer("peugot", "607", 4000),
  offer3: new BetterOffer("audi", "a30", 44444),
  offer4: new BetterOffer("maluch", "126p", 1000),
  offer5: new BetterOffer("bmw", "m5", 20000),
};

for (const wypiszOferte in Sale) {
  let newLi = document.createElement("li");
  newUl.append(newLi);
  let btn = document.createElement("button");
  newUl.append(btn);
  btn.textContent = Sale[wypiszOferte].name;
  newLi.textContent +=
    `to jest samochód marki ${Sale[wypiszOferte].name}` + "\n";
  newLi.textContent += Sale[wypiszOferte].model + "\n";
  newLi.textContent += `cena to ${Sale[wypiszOferte].price} zł`;
}

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