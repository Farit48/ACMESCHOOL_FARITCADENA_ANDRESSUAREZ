document.addEventListener("DOMContentLoaded", () => {


    const ActiveUser = JSON.parse(localStorage.getItem("usuarioactivo"));
    const contenidoDinamico = document.getElementById('contenido-dinamico');
    const header = document.getElementById('HeaderDash');
    console.log("El usuario activo es:", ActiveUser);
    header.innerHTML= `
    <h1>ACME <br>School</h1>
    <div id="Settings" class="Settings">${ActiveUser.nombre}</div>
    
    `
    const settings = document.getElementById('Settings');
    settings.addEventListener('mouseover', () => {  
        if (!document.getElementById('barOpciones')) {
          const bar = document.createElement('div');
          bar.id = 'barOpciones'; 
          bar.innerHTML = "<div>Opciones</div> <div id='cerrarSesion'>Cerrar Sesion</div>";
          settings.appendChild(bar);
          const cerrarSesion = document.getElementById('cerrarSesion')
          cerrarSesion.addEventListener('click', ()=>{
            window.location.href = '/index.html'
          });  
        };
    }); 
    settings.addEventListener('mouseleave', () => {
        const bar = document.getElementById('barOpciones');
        if (bar) {
          settings.removeChild(bar);
        }
      });
    switch (ActiveUser.cargo) {
        case "Profesor":
            contenidoDinamico.innerHTML = `<h1>Hola profe  ${ActiveUser.nombre}</h1>`
            const mainProfes= document.getElementById('mainDashboard')
        console.log("Usuario es PROFESOR");
        break;

        case "Administrativo":
            contenidoDinamico.innerHTML = `<h1>Hola  ${ActiveUser.nombre}</h1>`
            const mainAdmins= document.getElementById('mainDashboard');
            mainAdmins.innerHTML= `
            <section>
                <h2>Cursos</h2>
            </section>
            <section >
                <h2>Estudiantes</h2>
                <div id="DataEstudiantes" ></div>
            </section>
            <section>
                <h2 id="RegCurso">Registro Cursos</h2>
                <h2 id="RegEstud">Registro Estudiantes</h2>
            </section>
        
            `
           
            
            
        function RegistroEstudiantes(){
            const RegEstud = document.getElementById('RegEstud');
            RegEstud.addEventListener('click', ()=>{
            mainAdmins.innerHTML = `
            <form action="">
                <p>Identificacion</p>
                <input id="IdAlumn" type="number">
                <p>Nombre y Apellido</p>
                <input id="NomAlumn" type="text">
                <p>Email</p>
                <input id="EmailAlumn" type="email">
                <p>Fecha de Nacimiento</p>
                <input id="NaciAlumn" type="date">
                <p>Foto</p>
                <input id="FotoAlumn" type="file" >
                <button id="btnRegistrar" type="submit" >REGISTRAR</button>
            </form>
            `
            const btnRegistrar = document.getElementById('btnRegistrar');
            btnRegistrar.addEventListener('click', (event)=>{
                event.preventDefault();
                
                nuevoAlumno = {
                    idAlumno: document.getElementById('IdAlumn').value,
                    nombreAlumno: document.getElementById('NomAlumn').value,
                    emailAlumno: document.getElementById('EmailAlumn').value,
                    fecha: document.getElementById('NaciAlumn').value,
                    foto: document.getElementById('FotoAlumn').value
                };
                const EstudianteGuardado = localStorage.getItem('Estudiantes');
                
                let Estudiantes = [];
                if (EstudianteGuardado){
                    Estudiantes = JSON.parse(EstudianteGuardado);
                    mainAdmins.appendChild(Estudiantes)
                }
                Estudiantes.push(nuevoAlumno);
                localStorage.setItem("Estudiantes", JSON.stringify(Estudiantes));
                
                window.location.href = '/Dashboard.html';
            });
            
           

        });
        }
        const registrar = document.getElementById('mainDashboard');
        registrar.addEventListener('click',RegistroEstudiantes );
        console.log("Usuario es ADMINISTRATIVO");
        break;
  }
});
