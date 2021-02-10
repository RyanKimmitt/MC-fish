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
let fishType;
// Fish Event
fishBtnEl.addEventListener("click", catchFish);

// Character Select
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
villagerImgEl.addEventListener("click", selectVillager);

function catchFish() {

  //character choose
  if (character === "steve") {
    megaFish("steve");
  } else if (character === "alex") {
    megaFish("alex");
  } else if (character === "villager") {
    megaFish("villager");
  }

  //use return to update img and count
  if (fishType == "cod") {
    numCod++;
    codSpanEl.innerHTML = numCod;
    resultImgEl.src = "img/Raw-Cod.png";
  } else if (fishType == "salom") {
    numSalmon++;
    salmonSpanEl.innerHTML = numSalmon;
    resultImgEl.src = "img/Raw-Salmon.png";
  } else if (fishType == "tropical") {
    numTropical++;
    tropicalSpanEl.innerHTML = numTropical;
    resultImgEl.src = "img/Tropical-Fish.png";
  } else if (fishType == "puffer") {
    numPuffer++;
    pufferSpanEl.innerHTML = numPuffer;
    resultImgEl.src = "img/Pufferfish.png";
  }

}

function megaFish(character) {

  if (character === "steve") {
    // STEVE PROBABILITIES: cod (70%), salmon (20%), tropical (5%), puffer (5%)
    fishType;
    let randNum = Math.random();
    if (randNum < 0.7) {
      return(fishType = "cod");
    } else if (randNum < 0.9) {      
      return(fishType = "salom");
    } else if (randNum < 0.95) {
      return(fishType = "tropical");
    } else {
    return( fishType = "puffer");
    }
  } else if (character === "alex") {
    // ALEX PROBABILITIES: cod (10%), salmon (10%), tropical (30%), puffer (50%)
    let randNum = Math.random();
    if (randNum < 0.1) {
      return(fishType = "cod");
    } else if (randNum < 0.2) {
      return(fishType = "salom");
    } else if (randNum < 0.5) {
      return(fishType = "tropical");
    } else {
      return(fishType = "puffer");
    }
  } else if (character === "villager") {
    // VILLAGER PROBABILITIES: cod (25%), salmon (25%), tropical (25%), puffer (25%)
    let randNum = Math.random();
    if (randNum < 0.25) {
      return(fishType = "cod");
    } else if (randNum < 0.5) {
      return(fishType = "salom");
    } else if (randNum < 0.75){
      return( fishType = "tropical");
    } else {
      return( fishType = "puffer");
    }
  }

}