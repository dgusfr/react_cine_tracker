import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
console.log("Chave de API:", apiKey);
const baseURL = "https://api.themoviedb.org/3";

export const buscarDetalhesDoFilme = async (id) => {
  try {
    const url = `${baseURL}/movie/${id}`;
    console.log("URL da Requisição:", url); // Log da URL
    const resposta = await axios.get(url, {
      params: {
        api_key: apiKey,
        language: "en",
      },
    });
    console.log("Resposta da API:", resposta.data); // Log da resposta
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar detalhes do filme:", erro);
    throw new Error(
      "Não foi possível carregar os detalhes do filme. Por favor, tente novamente mais tarde."
    );
  }
};
