import axios from "axios"

const TOKEN = "cincns9r01qrmpmkr5ugcincns9r01qrmpmkr5v0"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
  token: TOKEN
  }
})

// customer input 