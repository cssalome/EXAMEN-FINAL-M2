const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const perfil = {
  name: "Jonathan",
  email: "jonathan@gmail.com",
  password: "123456",
};

const postPerfil = () => {
  fetch("https://tiendavirtualmern.herokuapp.com/api", {
    method: "POST",
    body: JSON.stringify(perfil),
    headers: {
      "Content-type": "application/json",
    }
      .then((response) => response.json())
      .then((data) => console.log(data)),
  });
};
