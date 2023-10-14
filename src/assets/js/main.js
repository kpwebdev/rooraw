// bootstrap script file
import "bootstrap";

// update current year in copyright section of the footer
const yearSpan = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearSpan.innerHTML = currentYear;
