export default class Postagens {
  static base_url = "https://blog-m2.herokuapp.com";

  static async listandoPostagensDaApi() {
    return await fetch(`${this.base_url}/posts?page=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + JSON.parse(localStorage.getItem("@blog-M2: token")) 
      },
    })
    .then(response => response.json())
    .then(response => response.data)
    .catch((erro) => console.log(erro))
  }
  
  static async criandoNovaPostagem(conteudoPostagem) {
    return await fetch(`this.base_url/posts`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + JSON.parse(localStorage.getItem("@blog-M2: token")) 
      },
      body: JSON.stringify(conteudoPostagem)
    })
    .then(response => response.json())
    .then(response => {
      localStorage.setItem("@blog-M2: postId", JSON.stringify(response.id))
      return response
    })
    .catch((erro) => console.log(erro))
  }

  static async deletarPostagem(idPost) {
    return await fetch(this.base_url + `/posts/${idPost}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .catch((erro) => console.log(erro))
  }
}