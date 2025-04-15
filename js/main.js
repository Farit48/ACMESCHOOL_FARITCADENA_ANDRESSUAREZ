/****REGISTRO USUARIOS */

function setupRegistroButton() {
    const registroPage = document.getElementById('Registro')
    registroPage.addEventListener('click', ()=>{
        const paginaTotal = document.getElementById('page')
        paginaTotal.innerHTML= `
        <h1>Registro</h1>
        <section>
            <form action="#">
                <p>Numero de identificacion</p>
                <input id="numID" type="number" name="numID" >
                <p>Nombre</p>
                <input id="Nombre" type="text">
                <p>Cargo</p>
                <span>Administrativo</span><input id="cargo" type="radio" name="cargo"  value="Administrativo">
                <span>Profesor</span><input id="cargo" type="radio" name="cargo"  value="Profesor">
                <p>Email</p>
                <input id="email" type="email" name="email" >
                <p>Contraseña</p>
                <input  id="password" type="password"><br>
                <style>
                button{
                    margin-top:30px;
                }
                </style>
                <button id="btnRegistrar" type="submit" >REGISTRAR</button>
            </form>
         <section>
        `;
        
        const btnRegistrar = document.getElementById('btnRegistrar')
        btnRegistrar.addEventListener('click', (event)=>{
            event.preventDefault()
            
            nuevoUser = {
                id: document.getElementById('numID').value,
                nombre: document.getElementById('Nombre').value,
                cargo: document.querySelector('input[name="cargo"]:checked').value,
                email: document.getElementById('email').value,
                contraseña: document.getElementById('password').value,
            }
            const usuariosGuardados = localStorage.getItem("Usuarios");
            let Usuarios = [];
            if (usuariosGuardados) {
                Usuarios = JSON.parse(usuariosGuardados);
            }
            Usuarios.push(nuevoUser);
            localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
            paginaTotal.innerHTML = `
            <header>
                <h1>ACME <br>School</h1>
            </header>
            <main>
                <section>
                    <h2>Inicio de Sesion</h2>
                </section>
                <section class="formInicio">
                    <div>
                        <p>Usuario</p>
                        <input id="usuario" type="text">
                        <p>Contraseña</p>
                        <input id="contraseña" type="password">
                    </div>
                    <div>
                        <button  id="btnInicio" class="btnInicio">Inicia sesion</button>
                    </div>
                </section>
                <section>
                    <p>¿No tienes usuario? <my-button id="Registro"></my-button></p>
                </section>
            </main>
            <footer>
                <p>Todos los derechos reservados</p>
            </footer>
            
            `
            setupRegistroButton();
        })
        
        
    })
}

const registroPage = document.getElementById('Registro');
registroPage.addEventListener('click', setupRegistroButton);

/****INISIO DE SESION */

function InisiarSesion(){
    const btnInicio = document.getElementById('btnInicio');
    btnInicio.addEventListener('click', ()=>{
        const User = document.getElementById('usuario').value;
        const Pass = document.getElementById('contraseña').value;
        const datos = localStorage.getItem("Usuarios");
        if (datos){
            const userin = JSON.parse(datos);
            if (Array.isArray(userin)){
                const correct = userin.find(usuario =>(
                    usuario.id === User && usuario.contraseña === Pass
                ));
                if (correct){
                    window.location.href = '/Dashboard.html'
                }
                else{
                    alert('Error: Credenciales incorrectas.');
                }
            }
            else{
                alert('Error: Datos de usuario no válidos.');
            }
        }
        else{
            alert('No hay usuarios registrados.');
        }
    })
}
const iniciobtn = document.getElementById('btnInicio')
iniciobtn.addEventListener('click', InisiarSesion)

/****BOTON REUTILIZABLE */
class myButton extends HTMLElement {
    
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'})
        shadow.innerHTML = `
        <style>
          div {
            background: #f0f0f0;
            padding: 10px;
            border-radius: 8px;
            font-family: sans-serif;
          }
        </style>
        <button>
          Dame Click
        </button>
      `;
    }
   
}
customElements.define('my-button', myButton)