import React, { createContext, useState, useContext } from "react";
import { buscarNotaDoFilme } from "services/apiService";

const FilmeContext = createContext();
FilmeContext.displayName = "FilmeContext";

export function FilmeProvider({ children }) {
  const [filmeCache, setFilmeCache] = useState({});
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const carregarFilme = async (filmeLocal) => {
    if (filmeCache[filmeLocal.id]) {
      return filmeCache[filmeLocal.id];
    }

    setLoading(true);
    setErro(null);

    try {
      const nota = await buscarNotaDoFilme(filmeLocal.id);
      const filmeComNota = {
        ...filmeLocal,
        nota,
      };
      setFilmeCache((prevCache) => ({
        ...prevCache,
        [filmeLocal.id]: filmeComNota,
      }));
      return filmeComNota;
    } catch (error) {
      setErro("Erro ao carregar o filme. Tente novamente mais tarde.");
      return { ...filmeLocal, nota: "N/A" };
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
 
