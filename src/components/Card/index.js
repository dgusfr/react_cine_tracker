import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";
import { useFilmeContext } from "contextos/FilmeContext";
import { useFavoritoContext } from "contextos/Favoritos";

function Card({ id, titulo, capa }) {
  const { carregarFilme, filme } = useFilmeContext();
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const [nota, setNota] = useState(null);
  const ehFavorito = favorito.some((fav) => fav.id === id);

  useEffect(() => {
    const fetchData = async () => {
      await carregarFilme(id);
      setNota(filme?.vote_average);
    };

    fetchData();
  }, [id, carregarFilme, filme]);

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/filmes/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        {nota && <p>Nota: {nota}/10</p>}
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
