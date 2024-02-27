let cnt = 0;
const seats = document.getElementsByClassName("btns");
for (const seat of seats) {
  seat.addEventListener("click", function called(event) {
    cnt += 1;
    if (cnt > 4) {
      alert("You cant buy more than 4 ticket");
      return;
    }
    event.target.classList.add("bg-green-400");
    event.target.setAttribute("disabled", true);
    createNewTicket("add_tic", event.target.innerText);
    scoreUpdate1("update-1");
    scoreUpdate2("update-2");
    changeTotal("total-price");
    changeTotal("grand-price");
    if (cnt === 4) {
      changeDisability("apply-field");
      changeDisability("apply-button");
    }
    if(cnt>=1){
      const s = document.getElementById("phone");
      if(s.value>=1)
      changeDisability('next');
    }
  });
}
document.getElementById("phone").addEventListener("keyup", function (event) {
  if (cnt >= 1 && event.target.value >= 1) {
    changeDisability("next");
  }
});
function getText() {
  const l = document.getElementById("apply-field");
  if (l.value === "NEW15") {
    change15();
  } else if (l.value === "Couple 20") {
    change20();
  } else {
    alert("This Coupon is not valid");
  }
}
function change15() {
  const gt = document.getElementById("grand-price");
  const gp = parseInt(gt.innerText);
  const gpp = gp - 0.15 * gp;
  gt.innerText = gpp;
  const abc = document.getElementById("gayeb");
  abc.classList.add("hidden");
  disText1("dis");
  disMoney1("dis-pri", 0.15 * gp);
}
function change20() {
  const gt = document.getElementById("grand-price");
  const gp = parseInt(gt.innerText);
  const gpp = gp - 0.2 * gp;
  gt.innerText = gpp;
  const abc = document.getElementById("gayeb");
  abc.classList.add("hidden");
  disText2("dis");
  disMoney2("dis-pri", 0.2 * gp);
}
