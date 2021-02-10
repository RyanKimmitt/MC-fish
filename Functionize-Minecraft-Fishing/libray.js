function selectSteve() {
    character = "steve"
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");
    villagerImgEl.classList.remove("active");
  }
  
  function selectAlex() {
    character = "alex";
    steveImgEl.classList.remove("active");
    alexImgEl.classList.add("active");
    villagerImgEl.classList.remove("active");
  }
  
  function selectVillager() {
    character = "villager";
    steveImgEl.classList.remove("active");
    alexImgEl.classList.remove("active");
    villagerImgEl.classList.add("active");
  }



 