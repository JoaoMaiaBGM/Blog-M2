export default class CadastroRequest {
  static base_url = "https://blog-m2.herokuapp.com";

  static async novoCadastro(dadosNovoCadastro) {
    return await fetch(this.base_url + "/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosNovoCadastro)
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      localStorage.setItem("@blog-M2: userId", JSON.stringify(response.id))
    })
    .catch((erro) => console.log(erro))
  }

  static async listarCadastroPorId(idUsuario) {
    return await fetch(this.base_url + `/users/${idUsuario}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + JSON.parse(localStorage.getItem("@blog-M2: token")) 
      }
    })
    .then(response => response.json())
    .catch((erro) => console.log(erro))
  }
}