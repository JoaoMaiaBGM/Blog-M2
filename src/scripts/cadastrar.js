import CadastroRequest from "../controller/cadastro.controller.js";

export default class ElementosDomCadastro {

  static async novoUsuario() {
    const mainCadastrar = document.querySelector('.cadastrar');

    /* Criando os elementos */
    const h1                = document.createElement('h1');
    const form              = document.createElement('form');
      const inputNome       = document.createElement('input');
      const inputEmail      = document.createElement('input');
      const inputFoto       = document.createElement('input');
      const inputSenha      = document.createElement('input');
    const buttonCadastrar   = document.createElement('button');
    const retornoCadastro = document.createElement('span');

    h1.className            = 'cadastrar_title';
    form.className          = 'cadastro_form';

      inputNome.className   = 'cadastro_form--nome';
      inputNome.type        = 'text';
      inputNome.name        = 'username';
      inputNome.required    = 'required';

      inputEmail.className  = 'cadastro_form--email';
      inputEmail.type       = 'email';
      inputEmail.name       = 'email';
      inputEmail.required   = 'required';

      inputFoto.className   = 'cadastro_form--foto';
      inputFoto.type        = 'url';
      inputFoto.name        = 'avatarUrl';

      inputSenha.className  = 'cadastro_form--senha';
      inputSenha.type       = 'password';
      inputSenha.name       = 'password';
      inputSenha.required   = 'required';

    buttonCadastrar.className   = 'cadastro_enter';
    buttonCadastrar.type        = 'button';

    retornoCadastro.innerText = '';

    /* Colocando os valores */
    h1.innerText            = 'Cadastro';
    inputNome.placeholder   = 'Nome';
    inputEmail.placeholder  = 'E-mail';
    inputFoto.placeholder   = 'Url da foto';
    inputSenha.placeholder  = 'Senha';
    buttonCadastrar.innerText   = 'Cadastrar';
    buttonCadastrar.addEventListener('click', async (event) =>{
      event.preventDefault();
      const dataCadastro = {};
      const formularioCadastro = [...event.srcElement.form];
      formularioCadastro.forEach((input) => {
        if(input.value !== '') {
          dataCadastro[input.name] = input.value
        }
      });
      await CadastroRequest.novoCadastro(dataCadastro);
    });

    /* Montando os elementos */
    form.append(inputNome, inputEmail, inputFoto, inputSenha, buttonCadastrar, retornoCadastro);
    mainCadastrar.append(h1, form);
  }
}