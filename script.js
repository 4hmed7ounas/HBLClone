let body = document.body;
let dark = document.getElementById("dark");
let light = document.getElementById("light");
function changetoDark() {
  dark.style.color = "#197056";
  light.style.color = "#717171";
  body.style.color = "white";
  body.style.backgroundColor = "black";
}

function changetolight() {
  dark.style.color = "#717171";
  light.style.color = "#197056";
  body.style.color = "#717171";
  body.style.backgroundColor = "white";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

setInterval(function () {
  plusSlides(1);
}, 3000);

let mobile = document.getElementById("mobile");
let konnect = document.getElementById("konnect");
let hblM = document.getElementById("hblM");
let hblK = document.getElementById("hblK");
function changetoMobile() {
  hblM.style.color = "#197056";
  hblK.style.color = "#717171";
  hblM.style.borderBottom = "3px solid #197056";
  hblK.style.borderBottom = "0";
  mobile.style.display = "flex";
  konnect.style.display = "none";
}

function changetoKonnect() {
  hblM.style.color = "#717171";
  hblK.style.color = "#197056";
  hblM.style.borderBottom = "0";
  hblK.style.borderBottom = "3px solid #197056";
  mobile.style.display = "none";
  konnect.style.display = "flex";
}

let credit = document.getElementById("credit");
let debit = document.getElementById("debit");
let hblC = document.getElementById("hblC");
let hblD = document.getElementById("hblD");
function changetoCredit() {
  hblC.style.color = "#197056";
  hblD.style.color = "#717171";
  hblC.style.borderBottom = "3px solid #197056";
  hblD.style.borderBottom = "0";
  credit.style.display = "flex";
  debit.style.display = "none";
}

function changetoDebit() {
  hblC.style.color = "#717171";
  hblD.style.color = "#197056";
  hblC.style.borderBottom = "0";
  hblD.style.borderBottom = "3px solid #197056";
  credit.style.display = "none";
  debit.style.display = "flex";
}

function updateValues() {
  const transaction = document.getElementById("transaction").value;
  const months = document.getElementById("months").value;
  document.getElementById("transactionAmount").value = transaction;
  document.getElementById("monthsAmount").value = months;
  calculateInstallment(transaction, months);
}

function updateSlider(id) {
  const amount = document.getElementById(id + "Amount").value;
  document.getElementById(id).value = amount;
  updateValues();
}

function calculateInstallment(transaction, months) {
  const financeCharges = 0.24;
  const processingFees = 700;
  const amountWithInterest = transaction * (1 + financeCharges);
  const monthlyInstallment = (amountWithInterest + processingFees) / months;
  document.getElementById(
    "installment"
  ).textContent = `PKR ${monthlyInstallment.toFixed(2)}`;
}

updateValues();

let creditcardIP = document.getElementById("creditcardIP");
let carL = document.getElementById("carL");
let personalL = document.getElementById("personalL");
let CIP = document.getElementById("CIP");
let CR = document.getElementById("CR");
let PL = document.getElementById("PL");
function changetoCIP() {
  CIP.style.color = "#197056";
  CR.style.color = "#717171";
  PL.style.color = "#717171";
  CIP.style.borderBottom = "3px solid #197056";
  CR.style.borderBottom = "0";
  PL.style.borderBottom = "0";
  creditcardIP.style.display = "flex";
  carL.style.display = "none";
  personalL.style.display = "none";
}

function changetoCR() {
  CIP.style.color = "#717171";
  CR.style.color = "#197056";
  PL.style.color = "#717171";
  CIP.style.borderBottom = "0";
  CR.style.borderBottom = "3px solid #197056";
  PL.style.borderBottom = "0";
  creditcardIP.style.display = "none";
  carL.style.display = "flex";
  personalL.style.display = "none";
}

function changetoPL() {
  CIP.style.color = "#717171";
  CR.style.color = "#717171";
  PL.style.color = "#197056";
  CIP.style.borderBottom = "0";
  CR.style.borderBottom = "0";
  PL.style.borderBottom = "3px solid #197056";
  creditcardIP.style.display = "none";
  carL.style.display = "none";
  personalL.style.display = "flex";
}
