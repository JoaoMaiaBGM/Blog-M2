import Postagens from "../controller/homepage.controller.js";
import LoginRequest from "../controller/login.controller.js";

export default class ElementosDomLogin {

  static async loginUsuario() {
    const mainLogin = document.querySelector('.login');

    /* Criando os elementos */
    const h1            = document.createElement('h1');
    const form          = document.createElement('form');
      const inputEmail  = document.createElement('input');
      const inputSenha  = document.createElement('input');
    const buttonEnter   = document.createElement('button');

    h1.className              = 'login_title';
    form.className            = 'login_form';

      inputEmail.className    = 'login_form--email';
      inputEmail.type         = 'email';
      inputEmail.name         = 'email';

      inputSenha.className    = 'login_form--senha';
      inputSenha.type         = 'password';
      inputSenha.name         = 'password';

      buttonEnter.className   = 'login_enter';
      buttonEnter.type        = 'button'

    /* Colocando os valores */
    h1.innerText            = 'Login';
    inputEmail.placeholder  = 'E-mail';
    inputSenha.placeholder  = 'Senha';
    buttonEnter.innerText   = 'Login';
    buttonEnter.addEventListener('click', async (event) =>{
      event.preventDefault();
      const dataLogin = {};
      const formularioLogin = [...event.srcElement.form];
      formularioLogin.forEach((input) => {
        if(input.value !== '') {
          dataLogin[input.name] = input.value
        }
      });
      await Postagens.listandoPostagensDaApi();
      if(JSON.parse(localStorage.getItem("@blog-M2: token")) !== null) {
        window.location.href = '/src/pages/homepage.html';
        await LoginRequest.login(dataLogin);
      }
    });

    /* Montando os elementos */
    form.append(inputEmail, inputSenha, buttonEnter);
    mainLogin.append(h1, form);
  }
}