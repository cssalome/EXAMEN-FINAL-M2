const slide = () => {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
};

// INICIAR SECION------------------------------------->
const loing = () => {
  const form = document.getElementById("loing");
  form.addEventListener("submit", async (e) => {
    e.preventDefault;
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    console.log(email, password);

    try {
      const res = await fetch(
        "https://tiendavirtualmern.herokuapp.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      if (res.status === 401) {
        alert("Mail o contraceña incorrecta");
      } else {
        alert("Bienvenido");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  });
};

// REGISTER ------------------------------------------>
const register = () => {
  const form = document.getElementById("register");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("nameRegister").value;
    const email = document.getElementById("emailRegister").value;
    const password = document.getElementById("passwordRegister").value;
    console.log(email, password);

    try {
      const res = await fetch(
        "https://tiendavirtualmern.herokuapp.com/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      if (res.status === 400) {
        alert("El usuario ya existe");
      } else if (res.status === 500) {
        alert("Datos incompletos");
      } else {
        alert("Cuenta creada");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  });
};

function main() {
  slide();
  loing();
  register();
}
main();
