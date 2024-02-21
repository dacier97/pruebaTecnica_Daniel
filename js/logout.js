const logout = () => {
  window.location.href  = "../login.html";
};

const logoutBotton = document.querySelector("#logoutBotton");
logoutBotton.addEventListener("click", logout);
