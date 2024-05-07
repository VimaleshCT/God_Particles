// Accordion functionality
document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// Lazy loading for featured works
document.getElementById("show-more-btn").addEventListener("click", () => {
  const additionalWorks = document.createElement("div");
  additionalWorks.innerHTML = `
          <div class="work-item">
              <img src="pro.png" alt="Work 2">
              <p>Drum Kit</p>
          </div>
          <div class="work-item">
              <img src="project_4.png" alt="Work 3">
              <p>Movie Land</p>
          </div>
          <div class="work-item">
              <img src="pro1.png" alt="Work 3">
              <p>AI Image generator</p>
          </div>
]
      `;
  document.querySelector(".works-gallery").appendChild(additionalWorks);
});
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});
$(document).ready(function () {
  $(".testimonials-carousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    subject === "" ||
    message === ""
  ) {
    alert("Please fill out all fields");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

$(document).ready(function () {
  $(".image-popup-vertical-fit").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    gallery: {
      enabled: true,
    },

    zoom: {
      enabled: true,

      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function

      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
});
