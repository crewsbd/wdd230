const today = new Date();
const oneDay = 1000 * 60 * 60 *24; //day length in ms
if(localStorage.lastVisit) {
    const daysSince = ((today.getTime() - new Date(localStorage.lastVisit)))/oneDay;
    document.querySelector(".repeat-visit").innerHTML = `<b>It looks like you've been here before. ${Math.floor(daysSince)} days ago to be precise.<b> `
}
else {
    const daysSince = 0;
    document.querySelector(".repeat-visit").innerHTML = "<b>It looks like this is your first time visiting.<b> ";
}
localStorage.lastVisit = today;

