const btnSubmit = document.querySelector("#btn-send-message");
const btnAllWork = document.querySelector("#btn-all-work");
const cardWork = document.querySelectorAll(".card-work");
const emailError = document.querySelector("#email-input");
const subjectError = document.querySelector("#subject-input");
const messageError = document.querySelector("#message-input");
const emailValue = document.querySelector("#email");
const subjectValue = document.querySelector("#subject");
const messageValue = document.querySelector("#message");
const navMenu = document.querySelectorAll(".nav-link");
const toTop = document.querySelector(".top");

AOS.init();

$(document).ready(function () {
  $(".all-card").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    speed: 300,
    centerPadding: "100px",
    autoplaySpedd: 0.1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".modal-slick").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 400,
    centerPadding: "10px",
    autoplaySpedd: 0.1,
  });
});
let currentCard = 2;
btnAllWork.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = currentCard; i < currentCard + 2; i++) {
    if (cardWork[i]) {
      cardWork[i].style.display = "flex";
    }
  }
  currentCard += 2;
  if (currentCard >= cardWork.length) {
    e.target.style.display = "none";
  }
});

function validationEmail() {
  emailError.innerHTML = "";

  const polaEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!polaEmail.test(emailValue.value)) {
    emailError.innerHTML = "Email tidak valid";
  } else if (emailValue.value == "") {
    emailError.innerHTML = "Email Tidak Boleh kosong";
  } else {
    return true;
  }
}

function validationSubject() {
  if (subjectValue.value == "") {
    subjectError.innerHTML = "Subject Harus disii";
  } else {
    subjectError.innerHTML = "";
    return true;
  }
}

function validationMessage() {
  if (messageValue.value == "") {
    messageError.innerHTML = "Message Harus  Terisi";
  } else {
    messageError.innerHTML = "";
    return true;
  }
}
emailValue.addEventListener("keyup", validationEmail);
btnSubmit.addEventListener("click", () => {
  if (!validationEmail() && !validationMessage() && !validationSubject()) {
    alert("Form tidak sesuai");
  } else if (validationEmail() && validationMessage() && validationSubject()) {
    alert("Terima Kasih");
  }
});

navMenu.forEach((nav) => {
  nav.addEventListener("click", () => {
    navMenu.forEach((navLink) => navLink.classList.remove("active"));
    nav.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
