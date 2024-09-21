import React, { createContext, useState, useContext } from "react";
import { buscarDetalhesDoFilme } from "services/apiService";

const FilmeContext = createContext();
FilmeContext.displayName = "FilmeContext";

export function FilmeProvider({ children }) {
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const carregarFilme = async (id) => {
    setLoading(true);
    setErro(null);

    try {
      const dadosDoFilme = await buscarDetalhesDoFilme(id);
      setFilme(dadosDoFilme);
    } catch (error) {
      setErro(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FilmeContext.Provider value={{ filme, carregarFilme, loading, erro }}>
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

export default FilmeContext;
