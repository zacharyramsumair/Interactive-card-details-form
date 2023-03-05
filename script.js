const confirm = document.querySelector("button");
let cardName = document.querySelector("#confirm-name");
let cardNumber = document.querySelector("#confirm-number");
let cardDate = document.querySelector("#confirm-date");
let cardCvc = document.querySelector("#confirm-cvc");

let numberInput = document.querySelector("#number");

// https://codepen.io/elmagicabdulah/pen/RpoRgw
numberInput.onkeydown = function () {
	if (
		numberInput.value.length == 4 ||
		numberInput.value.length == 9 ||
		numberInput.value.length == 14
	) {
		numberInput.value += " ";
	}
};

confirm.addEventListener("click", fixCard);

function fixCard(e) {
	let nameInput = document.querySelector("#name");
	let numberInput = document.querySelector("#number");
	let monthInput = document.querySelector("#month");
	let yearInput = document.querySelector("#year");
	let cvcInput = document.querySelector("#cvc");

	if (
		nameInput.value == "" ||
		numberInput.value == "" ||
		monthInput.value == "" ||
		yearInput.value == "" ||
		cvcInput.value == ""
	) {
		return;
	}

	cardName.textContent = nameInput.value;
	cardNumber.textContent = numberInput.value;
	cardDate.textContent = `${monthInput.value}/${yearInput.value}`;
	cardCvc.textContent = cvcInput.value;

	console.log(nameInput, "this is it");

	nameInput.value = "";
	numberInput.value = "";
	monthInput.value = "";
	yearInput.value = "";
	cvcInput.value = "";
}
