const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const customTipInput = document.getElementById("customTip");
const tipButtons = document.querySelectorAll("[data-tip]");
const error = document.getElementById("error");

const tipAmountDisplay = document.getElementById("tipAmount");
const totalBillDisplay = document.getElementById("totalBill");
const tipPerPersonDisplay = document.getElementById("tipPerPerson");
const totalPerPersonDisplay = document.getElementById("totalPerPerson");

let selectedTip = 10;

function formatMoney(amount) {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function calculateTip() {
  const bill = Number(billInput.value);
  const people = Number(peopleInput.value);

  const tip =
    customTipInput.value.trim() !== ""
      ? Number(customTipInput.value)
      : selectedTip;

  error.textContent = "";

  if (billInput.value.trim() === "" || bill < 0 || !Number.isFinite(bill)) {
    error.textContent = "Please enter a valid bill amount.";
    showZero();
    return;
  }

  if (
    peopleInput.value.trim() === "" ||
    !Number.isInteger(people) ||
    people < 1
  ) {
    error.textContent = "Number of people must be at least 1.";
    showZero();
    return;
  }

  if (!Number.isFinite(tip) || tip < 0 || tip > 100) {
    error.textContent = "Tip percentage must be between 0 and 100.";
    showZero();
    return;
  }

  const tipAmount = Math.round(bill * tip) / 100;
  const totalBill = Math.round((bill + tipAmount) * 100) / 100;
  const tipPerPerson = Math.round((tipAmount / people) * 100) / 100;
  const totalPerPerson = Math.round((totalBill / people) * 100) / 100;

  tipAmountDisplay.textContent = formatMoney(tipAmount);
  totalBillDisplay.textContent = formatMoney(totalBill);
  tipPerPersonDisplay.textContent = formatMoney(tipPerPerson);
  totalPerPersonDisplay.textContent = formatMoney(totalPerPerson);
}

function showZero() {
  tipAmountDisplay.textContent = formatMoney(0);
  totalBillDisplay.textContent = formatMoney(0);
  tipPerPersonDisplay.textContent = formatMoney(0);
  totalPerPersonDisplay.textContent = formatMoney(0);
}

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedTip = Number(button.dataset.tip);
    customTipInput.value = "";

    tipButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    calculateTip();
  });
});

customTipInput.addEventListener("input", () => {
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  calculateTip();
});

billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

document.getElementById("minus").addEventListener("click", () => {
  const people = Number(peopleInput.value);

  if (Number.isInteger(people) && people > 1) {
    peopleInput.value = people - 1;
  }

  calculateTip();
});

document.getElementById("plus").addEventListener("click", () => {
  const people = Number(peopleInput.value);

  if (
    peopleInput.value.trim() === "" ||
    !Number.isInteger(people) ||
    people < 1
  ) {
    peopleInput.value = 1;
  } else if (people < 1000) {
    peopleInput.value = people + 1;
  }

  calculateTip();
});

document.getElementById("reset").addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = 2;
  customTipInput.value = "";
  selectedTip = 10;

  tipButtons.forEach((btn) => {
    btn.classList.toggle("active", Number(btn.dataset.tip) === 10);
  });

  calculateTip();
});

calculateTip();
