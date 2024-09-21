import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = "https://api.themoviedb.org/3";

// Função para buscar detalhes de um filme por ID
export const buscarDetalhesDoFilme = async (id) => {
  try {
    const resposta = await axios.get(`${baseURL}/movie/${id}`, {
      params: {
        api_key: apiKey,
        language: "pt-BR", // Escolha o idioma desejado
      },
    });
    return resposta.data; // Retorna os dados do filme
  } catch (erro) {
    console.error("Erro ao buscar detalhes do filme:", erro);
    throw erro; // Propaga o erro para ser tratado no componente
  }
};
