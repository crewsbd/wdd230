const currentDate = new Date();
const currentYear = currentDate.getFullYear();


const yearFieldID = document.querySelector("#year-field");
if (yearFieldID != null) {
	yearFieldID.innerText = currentYear;
}


const lastUpdateID = document.querySelector("#last-update-field");
if (lastUpdateID != null) {
	lastUpdateID.innerText = document.lastModified;
}

const currentDateID = document.querySelector("#current-date");
if (currentDateID != null) {
	currentDateID.textContent = Intl.DateTimeFormat("en-UK", {
		dateStyle: "full"
	}).format(currentDate);
}

const formField = document.querySelector("#hidden-datetime");
if (formField != null) {
	formField.value = currentDate;
}