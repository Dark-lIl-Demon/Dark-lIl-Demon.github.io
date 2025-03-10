// TAB FUNCTIONALITY
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// SMALL MENU FUNCTIONALITY
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// GOOGLE SHEET FORM SUBMISSION
const scriptURL =
  "https://script.google.com/macros/s/AKfycbylmEy4I7lyqDNNT2gzKMR_4WVIpOCOExE-pzQ-Mp6dRGySrMwyp1-GUZ7K0J-dEds/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent";
        setTimeout(() => (msg.innerHTML = ""), 3000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });
}
