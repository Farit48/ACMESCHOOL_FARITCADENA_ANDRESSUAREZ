class Bienvenida extends HTMLElement {
    header = document.getElementById('header')
    
    constructor(){
        super();
        
    }
    mostrar(){
        const template = this.header.content.cloneNode(true);
        console.log(this.header) 
    }
}