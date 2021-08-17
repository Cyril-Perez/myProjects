let form = document.getElementById("content-form");
let company = document.querySelector(".inputPrenom");
let nom = document.querySelector(".inputNom");
let email = document.querySelector(".inputEmail");
let message = document.querySelector(".textarea");

function sendMail() {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // these IDs from the previous steps
    emailjs.sendForm("service_cpmaxime", "template_ajeh5ar", form).then(
      function () {
        console.log("sucess");
        form.innerHTML = "Message envoyé , merci de m'avoir contacté";
        form.classList.add("messageSend");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
}
sendMail();
