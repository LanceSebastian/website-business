const lastUpdated  = document.lastModified;
const currentYear = new Date().getFullYear();

document.getElementById("date").innerHTML = lastUpdated;
document.getElementById("year").innerHTML = currentYear;