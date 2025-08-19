const btns = document.querySelectorAll("#pagg_btn");
const item1 = document.querySelector("#pagg_1");

const allPaggItems = document.querySelectorAll(".gen_pagg");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const clickedBtn = btn.textContent;
    const activePagg = findActivePagg();
    if (activePagg == clickedBtn) {
      return;
    }
    removeActiveFromAll();
    setExisistingActiveBtnToNormal();
    setActiveBtn(btn);
    document.querySelector(`#pagg_${clickedBtn}`).classList.add("active");
  });
});

function findActivePagg() {
  let activePagg = null;
  allPaggItems.forEach((pagg, ind) => {
    if (pagg.classList.contains("active")) {
      activePagg = ind + 1;
    }
    return;
  });
  return activePagg;
}
function removeActiveFromAll() {
  allPaggItems.forEach((pagg) => {
    pagg.classList.remove("active");
  });
}


function setExisistingActiveBtnToNormal(){
    let activeBtn=null;
    btns.forEach((btn)=>{
        if(btn.classList.contains('bg-dark')){
            activeBtn=btn;
        }
        return
    })
    activeBtn.classList.remove('bg-dark','text-light');
    activeBtn.classList.add('text-dark','border');
}
function setActiveBtn(btn) {
  btn.classList.remove("bg-light", "text-dark");
  btn.classList.add("text-light", "bg-dark");
}
