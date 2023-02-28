let url = new URLSearchParams(location.search);
let firstName = url.get("firstname");
let lastName = url.get("lastname");
document.querySelector("#response-string").textContent = `Thank you ${firstName} ${lastName}, you've made a wise choice. We have sold your data to Faceoogleitter.`;