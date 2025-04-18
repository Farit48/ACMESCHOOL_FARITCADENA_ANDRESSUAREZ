



document.addEventListener("DOMContentLoaded", () => {


    const ActiveUser = JSON.parse(localStorage.getItem("usuarioactivo"))
    const Page = document.getElementById('contenido-dinamico')
    console.log("Tipo de usuario recibido:", ActiveUser);

    switch (ActiveUser.cargo) {
        case "Profesor":
            Page.innerHTML = '<h1>Hola profe</h1>'
        console.log("Usuario es PROFESOR");
        break;

        case "Administrativo":
            Page.innerHTML = '<h1>Hola administrativo</h1>'
        console.log("Usuario es ADMINISTRATIVO");
        break;
  }
});
