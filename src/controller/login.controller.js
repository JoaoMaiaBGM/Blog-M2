export default class LoginRequest {
  static base_url = "https://blog-m2.herokuapp.com";

  static async login(dadosLogin) {
    return await fetch(this.base_url + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosLogin)
    })
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      localStorage.setItem("@blog-M2: userId", JSON.stringify(res.userId))
      localStorage.setItem("@blog-M2: token", JSON.stringify(res.token))
      return res
    })
    .catch((erro) => console.log(erro))
  }
}