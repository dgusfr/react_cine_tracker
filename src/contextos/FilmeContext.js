import React, { createContext, useState, useContext } from "react";
import { buscarDetalhesDoFilme } from "services/apiService";

const FilmeContext = createContext();
FilmeContext.displayName = "FilmeContext";

export function FilmeProvider({ children }) {
  const [filmeCache, setFilmeCache] = useState({});
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const carregarFilme = async (id) => {
    if (filmeCache[id]) {
      return filmeCache[id];
    }

    setLoading(true);
    setErro(null);

    try {
      const dadosDoFilme = await buscarDetalhesDoFilme(id);
      setFilmeCache((prevCache) => ({
        ...prevCache,
        [id]: dadosDoFilme,
      }));
      return dadosDoFilme;
    } catch (error) {
      setErro("Erro ao carregar o filme. Tente novamente mais tarde.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return (
    <FilmeContext.Provider value={{ carregarFilme, loading, erro }}>
      {children}
    </FilmeContext.Provider>
  );
}

export function useFilmeContext() {
  const context = useContext(FilmeContext);
  if (!context) {
    throw new Error("useFilmeContext must be used within a FilmeProvider");
  }
  return context;
}
