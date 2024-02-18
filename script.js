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
    event.target.setAttribute('disabled', true);
    const par = document.getElementById("plzz");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h1");
    const h3 = document.createElement("h1");
    h1.innerText = event.target.innerText;
    h1.classList.add("b");
    div.appendChild(h1);
    h2.innerText = "Economy";
    h2.classList.add("b");
    div.appendChild(h2);
    h3.innerText = 550;
    h3.classList.add("b");
    div.appendChild(h3);
    div.classList.add("c");
    par.appendChild(div);
    let up_1 = document.getElementById("update-1");
    let up_11 = parseInt(up_1.innerText);
    let up_111 = up_11 - 1;
    up_1.innerText = up_111;
    let up_2 = document.getElementById("update-2");
    let up_22 = parseInt(up_2.innerText);
    let up_222 = up_22 + 1;
    up_2.innerText = up_222;

    //Total Price change
    const t = document.getElementById("total-price");
    const tp = parseInt(t.innerText);
    const tpp = cnt * 550;
    t.innerText = tpp;
    //Grand Price Change
    const gt = document.getElementById("grand-price");
    const gp = parseInt(gt.innerText);
    const gpp = cnt * 550;
    gt.innerText = gpp;

    // Anabeling Disabled button;
    if (cnt === 4) {
      document.getElementById("apply-field").removeAttribute("disabled");
      document.getElementById("apply-button").removeAttribute("disabled");
    }
  });
}
document.getElementById('phone').addEventListener('keyup', function(event){
  if(cnt>=1 && event.target.value>=1){
    document.getElementById("next").removeAttribute("disabled");
  }
 })
function getText() {
  const l = document.getElementById("apply-field");
  if(l.value === 'NEW15'){
    change15()
  } 
  else if(l.value === 'Couple 20'){
    change20()
  }else{
    alert("This Cupoon is not valid")
  }
}
function change15(){
  console.log("helloww");
  const gt = document.getElementById("grand-price");
  const gp = parseInt(gt.innerText);
  const gpp = gp-(.15*gp);
  gt.innerText = gpp;
  const abc = document.getElementById('gayeb');
  abc.classList.add('hidden');
  const diss = document.getElementById('dis');
  const h1 = document.createElement('h1');
  h1.innerText='Discount: 15%';
  h1.classList.add('dis');
  diss.appendChild(h1);
  const dis_pri = document.getElementById('dis-pri');
  const h2 = document.createElement('h1');
  h2.innerText='BDT'+ "   -"+.15*gp;
  h2.classList.add('dis');
  dis_pri.appendChild(h2);
}
function change20(){
  console.log("helloww");
  const gt = document.getElementById("grand-price");
  const gp = parseInt(gt.innerText);
  const gpp = gp-(0.2*gp);
  gt.innerText = gpp;
  const abc = document.getElementById('gayeb');
  abc.classList.add('hidden');
  const diss = document.getElementById('dis');
  const h1 = document.createElement('h1');
  h1.innerText='Discount: 20%';
  h1.classList.add('dis');
  diss.appendChild(h1);
  const dis_pri = document.getElementById('dis-pri');
  const h2 = document.createElement('h1');
  h2.classList.add('dis');
  h2.innerText='BDT'+ "   -"+0.2*gp;
  dis_pri.appendChild(h2);
}
function khela(){
  const a = document.getElementById('header');
  a.classList.add('hidden');
  const b = document.getElementById('coupon');
  b.classList.add('hidden');
  const c = document.getElementById('footer');
  c.classList.add('hidden');
}