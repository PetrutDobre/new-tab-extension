function startDate() {
    const today = new Date();
    let day = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    //let fulldate = week[day] + ", "  + date + " " + months[month]
    let fulldate2 = `${week[day]}, ${date} ${months[month]}`
    console.log(fulldate2)
    //document.getElementsByClassName("date")[0].innerHTML = fulldate2;
    document.querySelector(".date").innerHTML = fulldate2;
    setTimeout(startDate, 60000);
}
const week = [
    "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"
]
const months = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
]
startDate();

