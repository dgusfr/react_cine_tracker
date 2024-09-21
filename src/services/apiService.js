import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = "https://api.themoviedb.org/3";

export const buscarNotaDoFilme = async (id) => {
  try {
    const resposta = await axios.get(`${baseURL}/movie/${id}`, {
      params: {
        api_key: apiKey,
        language: "en",
      },
    });
    return resposta.data.vote_average;
  } catch (erro) {
    console.error("Erro ao buscar nota do filme:", erro);
    throw new Error("Não foi possível carregar a nota do filme.");
  }
};
