import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";
import { useFilmeContext } from "contextos/FilmeContext";
import { useFavoritoContext } from "contextos/Favoritos";

function Card({ id, titulo, capa }) {
  const { carregarFilme } = useFilmeContext();
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const [nota, setNota] = useState(null);
  const ehFavorito = favorito.some((fav) => fav.id === id);

  useEffect(() => {
    const fetchNota = async () => {
      const filme = await carregarFilme(id);
      if (filme) {
        setNota(filme.vote_average.toFixed(1)); // Limita a nota a uma casa decimal
      }
    };

    fetchNota();
  }, [id, carregarFilme]);

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/filmes/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        {nota !== null && <p className={styles.nota}>Nota: {nota}</p>}
      </Link>
      <img
        src={!ehFavorito ? iconeFavoritar : iconeDesfavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}

export default Card;
