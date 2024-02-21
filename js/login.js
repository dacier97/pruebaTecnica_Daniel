const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;

  fetch("http://localhost:8000/login")
    .then((res) => res.json())
    .then((json) =>
      json.map((data) => {
        if (data.name === name && data.pass === password) {
          window.location.href = "./index.html";
        } else {
          alert("volver a intentar");
        }
      })
    );
});
