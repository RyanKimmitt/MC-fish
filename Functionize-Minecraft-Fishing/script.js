// Minecraft Fishing Simulator by Mr. V

// HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let villagerImgEl = document.getElementById("villager-img");
let fishBtnEl = document.getElementById("fish-btn");
let resultImgEl = document.getElementById("result-img");
let codSpanEl = document.getElementById("cod-span");
let salmonSpanEl = document.getElementById("salmon-span");
let tropicalSpanEl = document.getElementById("tropical-span");
let pufferSpanEl = document.getElementById("puffer-span");

// Global Variables
let character = "steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
// Fish Event
fishBtnEl.addEventListener("click", catchFish);

// Character Select
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
villagerImgEl.addEventListener("click", selectVillager);

function catchFish() {
    var myfish;
  //character choose
  if (character === "steve") {
    myfish = megaFish(0.7, 0.9, 0.95); // Added in my fish ==
  } else if (character === "alex") {
    myfish = megaFish(0.1, 0.2, 0.5, 0.8); // Added in my fish ==
  } else if (character === "villager") {
    myfish = megaFish(0.25, 0.5, 0.75); // Added in my fish ==
  }
  //use return to update img and count
  if (myfish == "cod") {
    numCod++;
    codSpanEl.innerHTML = numCod;
    resultImgEl.src = "img/Raw-Cod.png";
  } else if (myfish == "salom") {
    numSalmon++;
    salmonSpanEl.innerHTML = numSalmon;
    resultImgEl.src = "img/Raw-Salmon.png";
  } else if (myfish == "tropical") {
    numTropical++;
    tropicalSpanEl.innerHTML = numTropical;
    resultImgEl.src = "img/Tropical-Fish.png";
  } else if (myfish == "puffer") {
    numPuffer++;
    pufferSpanEl.innerHTML = numPuffer;
    resultImgEl.src = "img/Pufferfish.png";
  }

}

function megaFish(C, S, T) {

  // STEVE PROBABILITIES: cod (70%), salmon (20%), tropical (5%), puffer (5%)

  let randNum = Math.random();
  if (randNum < C) {
    return "cod";

  } else if (randNum < S) {
    return "salom";

  } else if (randNum < T) {
    return "tropical";

  } else {
    return "puffer";
  }
}
