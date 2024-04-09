function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("contact").value;
  var classGrade = document.getElementById("class").value;

  // Basic validation checks (can be extended)
  if (name === "") {
    alert("Please enter your name");
    return false;
  }

  if (email === "" || !validateEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Add similar validation for contact and classGrade if needed

  return true; // Submit the form if all validations pass
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const faqItems = document.querySelectorAll(".faq-item");
const prevButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");

let currentItem = 0; // Index of currently displayed FAQ item

function showFAQ(index) {
  faqItems[currentItem].classList.remove("active");
  faqItems[index].classList.add("active");
  currentItem = index;

  prevButton.disabled = index === 0;
  nextButton.disabled = index === faqItems.length - 1; // Corrected condition to check for last item
}

showFAQ(currentItem); // Display first item initially

prevButton.addEventListener("click", () => {
  if (currentItem > 0) {
    showFAQ(currentItem - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentItem < faqItems.length - 1) {
    showFAQ(currentItem + 1);
  }
});
