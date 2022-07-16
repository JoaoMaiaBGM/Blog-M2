import Postagens from "../controller/homepage.controller.js";

export default class ElementosDomHomePage {

  static async homePage() {
    const blogHomepage = document.querySelector('.blog_homepage');
    //const blogPostagem = document.querySelector('.blog_postagem');

    /* Criando os elementos */
    const usuario                   = document.createElement('header');
        const usuarioAvatar         = document.createElement('figure');
          const usuarioAvatarImage  = document.createElement('img');
        const usuarioNome           = document.createElement('span');
        const usuarioLogout         = document.createElement('button');

    const blogPostagem                = document.createElement('main');
      const post                      = document.createElement('div');
        const postAvatar              = document.createElement('figure');
          const postAvatarImage       = document.createElement('img');

        const postConteudo            = document.createElement('div');
          const postUsuario           = document.createElement('h3');
          const publicacao            = document.createElement('fieldset');
            const publicacaoConteudo  = document.createElement('input');
            const postControlAdicionar  = document.createElement('button');


        const postControl             = document.createElement('div');
          const postControlEditar     = document.createElement('button');
          const postControlApagar     = document.createElement('button');
          const postControlData       = document.createElement('span');
    
    usuario.className             = 'usuario';
    usuarioAvatar.className       = 'usuario_avatar';
    usuarioAvatarImage.className  = 'usuario_avatar-image';
    usuarioNome.className         = 'usuario_nome';

    usuarioLogout.className       = 'usuario_logout';
    usuarioLogout.type            = 'button';

    blogPostagem.className          = 'blog_postagem';
    post.className                  = 'post';
    postAvatar.className            = 'post_avatar';
    postAvatarImage.className       = 'post_avatar-image';
    postConteudo.className          = 'post_conteudo';
    postUsuario.className           = 'post_usuario';
    publicacao.className            = 'publicacao';
    publicacaoConteudo.className    = 'publicacao_conteudo';
    publicacaoConteudo.type         = 'text'
    publicacaoConteudo.name         = "content"
    postControlAdicionar.className  = 'post_control-adicionar';

    postControl.className           = 'post_control';
    postControlEditar.className     = 'post_control-editar';
    postControlApagar.className     = 'post_control-apagar';
    postControlData.className       = 'post_control-data';
    postControlData.type            = 'date'

    /* Colocando os valores */
    usuarioNome.innerText         = 'João Maia';
    usuarioAvatarImage.src        = '/src/img/IMG_20190315_113650750.jpg';
    usuarioLogout.innerText       = 'Logout';
    usuarioLogout.addEventListener('click', async (event) => {
      event.preventDefault();
      localStorage.removeItem("@blog-M2: userId");
      localStorage.removeItem("@blog-M2: token");
      window.location.href = '/index.html';
    });

    //publicacaoConteudo.innerText    = '';
    publicacaoConteudo.placeholder  = 'Comece seu post incrivel!';
    postControlAdicionar.innerText  = 'Adicionar'
    postControlAdicionar.addEventListener('click', async (event) => {
      event.preventDefault();
      postAvatarImage.src   = '/src/img/IMG_20190315_113650750.jpg';
      postUsuario.innerText = 'João Carlos';
      const date = new Date()
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      postControlData.innerText = date.toLocaleDateString('pt-BR', options);

      const fieldsetPublicacao = event.target.parentElement;
      const inputPublicacao = fieldsetPublicacao.childNodes[0];
        if(inputPublicacao.value !== '') {
          inputPublicacao.name = inputPublicacao.value
        }
      await Postagens.criandoNovaPostagem(inputPublicacao)
    });

    postControlEditar.innerText = 'Editar';
    postControlApagar.innerText = 'Apagar';
    postControlApagar.addEventListener('click', async (event) => {
      event.preventDefault();
      const post = event.target.parentElement.parentElement;
      const postConteudo = post.childNodes[1];
      const id = JSON.parse(localStorage.getItem("@blog-M2: postId"))
      if(id !== null) {
        await Postagens.deletarPostagem(id);
      }
      postConteudo.remove()
    });

    /* Montando os elementos */
          usuarioAvatar.append(usuarioAvatarImage);
        usuario.append(usuarioAvatar, usuarioNome, usuarioLogout);

          postAvatar.append(postAvatarImage);

            publicacao.append(publicacaoConteudo, postControlAdicionar);
          postConteudo.append(postUsuario, publicacao);

          postControl.append(postControlEditar, postControlApagar, postControlData);

        post.append(postAvatar, postConteudo, postControl);
      blogPostagem.appendChild(post);
    blogHomepage.append(usuario, blogPostagem);
  }
}