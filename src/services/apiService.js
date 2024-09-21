import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = "https://api.themoviedb.org/3";

export const buscarDetalhesDoFilme = async (id) => {
  try {
    const resposta = await axios.get(`${baseURL}/movie/${id}`, {
      params: {
        api_key: apiKey,
        language: "pt-BR",
      },
    });
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar detalhes do filme:", erro);
    throw erro;
  }
};
