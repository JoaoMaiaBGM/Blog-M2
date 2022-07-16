import ElementosDomCadastro from "./scripts/cadastrar.js";
import ElementosDomLogin from "./scripts/login.js";
import ElementosDomHomePage from "./scripts/homepage.js";

ElementosDomCadastro.novoUsuario();

ElementosDomLogin.loginUsuario();

await ElementosDomHomePage.homePage();

//await Postagens.criandoNovaPostagem();

/* TESTES FUNCIONANDO 08/07/2022 */
/* const magnolia = await CadastroRequest.novoCadastro({
  "username": "Magnolia",
  "email": "magnolia@kenzie.com.br",
  "avatarUrl": "https://github.com/phmc99.png",
  "password": "Magnolia123"

});
console.log(magnolia) */

/* Logins */
//const loginBruno = await LoginRequest.login({
//  "email": "bruno@kenzie.com.br",
//  "password": "Bruno000"
//});
//console.log(login)

        /* OU */
        
//const loginJuarez = await LoginRequest.login({
//  "email": "juarez@kenzie.com.br",
//  "password": "Juarez111"
//});

//const listarBrunoPorId = await CadastroRequest.listarCadastroPorId(3597)
//console.log(listarBrunoPorId)

//const mensagem = {"content": "Essa é minha quarta postagem."}
//const postagensBruno = await Postagens.criandoNovaPostagem(mensagem)
//console.log(postagensBruno)

//const postagens = await Postagens.listandoPostagensDaApi()
//console.log(postagens)
//
//const listarPostagemPorId = await Postagens.listandoPostagemPorId(2235)
//console.log(listarPostagemPorId)