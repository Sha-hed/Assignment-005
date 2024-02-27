function createNewTicket(element, values) {
  const par = document.getElementById(element);
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h1");
  const h3 = document.createElement("h1");
  h1.innerText = values;
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
}
function scoreUpdate1(element) {
  let up_1 = document.getElementById(element);
  let up_11 = parseInt(up_1.innerText);
  let up_111 = up_11 - 1;
  up_1.innerText = up_111;
}
function scoreUpdate2(element) {
  let up_1 = document.getElementById(element);
  let up_11 = parseInt(up_1.innerText);
  let up_111 = up_11 + 1;
  up_1.innerText = up_111;
}
function changeTotal(element) {
  const t = document.getElementById(element);
  const tp = parseInt(t.innerText);
  const tpp = cnt * 550;
  t.innerText = tpp;
}
function changeDisability(element) {
  document.getElementById(element).removeAttribute("disabled");
}
function disText1(element) {
  const diss = document.getElementById(element);
  const h1 = document.createElement("h1");
  h1.innerText = "Discount: 15%";
  h1.classList.add("dis");
  diss.appendChild(h1);
}
function disMoney1(element, values) {
  const dis_pri = document.getElementById(element);
  const h2 = document.createElement("h1");
  h2.innerText = "BDT" + "   -" + values;
  h2.classList.add("dis");
  dis_pri.appendChild(h2);
}
function disText2(element) {
  const diss = document.getElementById(element);
  const h1 = document.createElement("h1");
  h1.innerText = "Discount: 20%";
  h1.classList.add("dis");
  diss.appendChild(h1);
}
function disMoney2(element, values) {
  const dis_pri = document.getElementById(element);
  const h2 = document.createElement("h1");
  h2.innerText = "BDT" + "   -" + values;
  h2.classList.add("dis");
  dis_pri.appendChild(h2);
}
