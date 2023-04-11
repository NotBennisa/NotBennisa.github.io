// Indexpage
const nav = document.querySelector("nav");

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 160) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const faqs = document.querySelectorAll(".wtfaq")

faqs.forEach(wtfaq => {
    wtfaq.addEventListener("click", () => {
    wtfaq.classList.toggle("active");
    })
})

menuIcon.addEventListener("click", () =>{
    mobileMenuContainer.classList.add("active");
});
closeIcon.addEventListener("click", () =>{
    mobileMenuContainer.classList.remove("active");
});

function updateSelectText(value) {
    var textElement = document.getElementById("komuneProcentdel");
    textElement.innerHTML = value + "%";
}

function updateText(value) {
    var text = "";
    if (value == 1) {
      text = "1 måned";
    } else if (value == 2) {
      text = "1 år";
    } else if (value == 3) {
      text = "50 år";
    }
    document.getElementById("periodetal").innerHTML = text;
}
function updateText(value) {
    var text = "";
    if (value == 1) {
      text = "om måneden";
    } else if (value == 2) {
      text = "om året";
    } else if (value == 3) {
      text = "over et helt arbejdsliv";
    }
    document.getElementById("beløbord").innerHTML = text;
}

var selectElement = document.getElementById("selectkommune");
var selectValue = parseFloat(selectElement.options[selectElement.selectedIndex].value);
document.getElementById("salary").addEventListener("input", calculate);
document.getElementById("sliderting").addEventListener("input", calculate);

// Define the calculate function
function calculate() {
    // Get the values of the form elements
    var selectElement = document.getElementById("selectkommune");
    var selectValue = parseFloat(selectElement.options[selectElement.selectedIndex].value);
    var textValue = parseFloat(document.getElementById("salary").value);
    var sliderValue = parseInt(document.getElementById("sliderting").value);
    updateSelectText(selectValue);
    
    // Map the slider value to the corresponding values
    var sliderValues = [1, 12, 600];
    var sliderValueMapped = sliderValues[sliderValue - 1];

    // Calculate the result and round to two decimal places
    var result = ((selectValue * textValue * sliderValueMapped)*0.01).toFixed(0);

    if (isNaN(result)) {
        result = 0;
    }

    // Update the text of the paragraph
    document.getElementById("beløb").innerHTML = result + "kr!";
}

// Call the calculate function once to set the initial result
calculate();

document.getElementById("selectkommune").addEventListener("change", calculate);